import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';

// Email regex pattern
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Check whether EmailJS credentials are fully and genuinely configured
 */
export function checkEmailServiceConfig() {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const missingKeys = [];
  if (!serviceId || serviceId.includes('your_')) missingKeys.push('VITE_EMAILJS_SERVICE_ID');
  if (!templateId || templateId.includes('your_')) missingKeys.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!publicKey || publicKey.includes('your_')) missingKeys.push('VITE_EMAILJS_PUBLIC_KEY');

  return {
    isConfigured: missingKeys.length === 0,
    missingKeys,
    serviceId,
    templateId,
    publicKey
  };
}

/**
 * Validate contact form payload
 */
export function validateContactForm({ name, email, subject, message }) {
  const errors = {};

  const trimmedName = (name || '').trim();
  if (!trimmedName) {
    errors.name = 'Your name is required.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters long.';
  }

  const trimmedEmail = (email || '').trim();
  if (!trimmedEmail) {
    errors.email = 'Email address is required.';
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@domain.com).';
  }

  const trimmedSubject = (subject || '').trim();
  if (!trimmedSubject) {
    errors.subject = 'Subject is required.';
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters long.';
  }

  const trimmedMessage = (message || '').trim();
  if (!trimmedMessage) {
    errors.message = 'Message details are required.';
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Please provide at least 10 characters for message context.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Store message in browser localStorage as a safety backup
 */
export function storeLocalInquiry(inquiry) {
  try {
    const existing = JSON.parse(localStorage.getItem('portfolio_inquiries_log') || '[]');
    const record = {
      id: inquiry.id || `inq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name: inquiry.name,
      email: inquiry.email,
      subject: inquiry.subject,
      message: inquiry.message,
      submissionDate: inquiry.submissionDate || new Date().toISOString(),
      status: inquiry.status || 'pending'
    };
    const updated = [record, ...existing].slice(0, 50); // Keep last 50 inquiries
    localStorage.setItem('portfolio_inquiries_log', JSON.stringify(updated));
    return record;
  } catch (err) {
    console.warn('LocalStorage backup inquiry error:', err);
    return null;
  }
}

/**
 * Update local inquiry status
 */
export function updateLocalInquiryStatus(id, status) {
  try {
    const existing = JSON.parse(localStorage.getItem('portfolio_inquiries_log') || '[]');
    const updated = existing.map((item) => (item.id === id ? { ...item, status } : item));
    localStorage.setItem('portfolio_inquiries_log', JSON.stringify(updated));
  } catch (err) {
    console.warn('Could not update inquiry status in storage:', err);
  }
}

/**
 * Generate mailto fallback link with pre-filled content
 */
export function generateMailtoUrl({ name, email, subject, message }) {
  const recipient = portfolioData?.personal?.email || 'amanamonibalaji1828@gmail.com';
  const cleanSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject || 'Direct Message'}`);
  const cleanBody = encodeURIComponent(
    `Hello Balaji,\n\n${message || ''}\n\n---\nSender Details:\nName: ${name || ''}\nEmail: ${email || ''}\nSent via Portfolio Website`
  );
  return `mailto:${recipient}?subject=${cleanSubject}&body=${cleanBody}`;
}

/**
 * Send contact inquiry via EmailJS or Backend API
 * STRICT: Only resolves with success if email service accepts & delivers the message!
 */
export async function sendContactMessage({ name, email, subject, message, honeypot = '' }) {
  // 1. Client-Side Spam / Honeypot Check
  if (honeypot && honeypot.trim() !== '') {
    return {
      success: true,
      emailDelivered: false,
      provider: 'spam-filter',
      message: 'Inquiry processed.'
    };
  }

  // 2. Validate input fields
  const validation = validateContactForm({ name, email, subject, message });
  if (!validation.isValid) {
    const firstErr = Object.values(validation.errors)[0];
    throw new Error(firstErr || 'Please check your form inputs.');
  }

  // 3. Format timestamp and store local safety backup
  const submissionDateFormatted = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  });

  const localRecord = storeLocalInquiry({
    name,
    email,
    subject,
    message,
    submissionDate: submissionDateFormatted,
    status: 'transmitting'
  });

  const recipientEmail =
    import.meta.env.VITE_RECIPIENT_EMAIL ||
    portfolioData?.personal?.email ||
    'amanamonibalaji1828@gmail.com';

  const configCheck = checkEmailServiceConfig();

  // 4. If EmailJS is configured on client, dispatch directly via EmailJS SDK
  if (configCheck.isConfigured) {
    try {
      const templateParams = {
        from_name: name.trim(),
        from_email: email.trim(),
        reply_to: email.trim(),
        to_name: portfolioData?.personal?.name || 'Amanamoni Balaji',
        to_email: recipientEmail,
        subject: subject.trim(),
        message: message.trim(),
        submission_date: submissionDateFormatted
      };

      const response = await emailjs.send(
        configCheck.serviceId,
        configCheck.templateId,
        templateParams,
        configCheck.publicKey
      );

      if (response.status === 200 || response.text === 'OK') {
        if (localRecord?.id) updateLocalInquiryStatus(localRecord.id, 'delivered-via-emailjs');
        
        // Also log to backend storage quietly in background if possible
        try {
          fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name,
              email,
              subject,
              message,
              submissionDate: submissionDateFormatted,
              recipientEmail,
              clientDelivered: true
            })
          }).catch(() => {});
        } catch (e) {}

        return {
          success: true,
          emailDelivered: true,
          provider: 'emailjs',
          status: response.status
        };
      } else {
        throw new Error(`EmailJS error status ${response.status}: ${response.text}`);
      }
    } catch (emailJsError) {
      if (localRecord?.id) updateLocalInquiryStatus(localRecord.id, 'failed-emailjs');
      const err = new Error(
        emailJsError?.text ||
          emailJsError?.message ||
          'Email service rejected the message. Please check your EmailJS dashboard or email directly.'
      );
      err.code = 'EMAILJS_FAILURE';
      err.fallbackMailto = generateMailtoUrl({ name, email, subject, message });
      throw err;
    }
  }

  // 5. Try Backend API (/api/contact) to see if server-side email keys are configured
  try {
    const apiRes = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        honeypot,
        submissionDate: submissionDateFormatted,
        recipientEmail
      })
    });

    const data = await apiRes.json().catch(() => ({}));

    // STRICT CHECK: Only consider success IF emailDelivered is true!
    if (apiRes.ok && data.success && data.emailDelivered) {
      if (localRecord?.id) updateLocalInquiryStatus(localRecord.id, 'delivered-via-api');
      return {
        success: true,
        emailDelivered: true,
        provider: 'api',
        messageId: data.messageId,
        data
      };
    }

    // If server stored backup but could not send email
    if (data.storedBackup && !data.emailDelivered) {
      if (localRecord?.id) updateLocalInquiryStatus(localRecord.id, 'stored-no-email');
      const err = new Error(
        'Email service is not yet connected to this portfolio. To receive messages directly in your inbox, configure your EmailJS credentials in .env.'
      );
      err.code = 'UNCONFIGURED_SERVICE';
      err.fallbackMailto = generateMailtoUrl({ name, email, subject, message });
      throw err;
    }
  } catch (backendErr) {
    if (backendErr.code === 'UNCONFIGURED_SERVICE') {
      throw backendErr;
    }
    // Network or server error
  }

  // 6. If neither client nor server has email service configured
  if (localRecord?.id) updateLocalInquiryStatus(localRecord.id, 'unconfigured');
  const configError = new Error(
    'Email delivery service is currently not connected (missing EmailJS Service ID, Template ID, or Public Key in .env).'
  );
  configError.code = 'UNCONFIGURED_SERVICE';
  configError.fallbackMailto = generateMailtoUrl({ name, email, subject, message });
  throw configError;
}
