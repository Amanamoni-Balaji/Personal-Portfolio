// Vercel Serverless Function & Node API Handler for /api/contact
import fs from 'fs';
import path from 'path';

// In-memory rate limiting store
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Email regex pattern
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method Not Allowed. Please send a POST request.'
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const { name, email, subject, message, honeypot, submissionDate, recipientEmail } = body;

    // 1. Spam & Honeypot Protection
    if (honeypot && String(honeypot).trim() !== '') {
      return res.status(200).json({
        success: true,
        message: 'Inquiry processed.'
      });
    }

    // 2. Server-side Rate Limiting by Client IP
    const clientIp =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress ||
      'unknown-ip';

    const now = Date.now();
    const clientRecord = rateLimitMap.get(clientIp) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

    if (now > clientRecord.resetTime) {
      clientRecord.count = 0;
      clientRecord.resetTime = now + RATE_LIMIT_WINDOW_MS;
    }

    clientRecord.count += 1;
    rateLimitMap.set(clientIp, clientRecord);

    if (clientRecord.count > MAX_REQUESTS_PER_WINDOW) {
      return res.status(429).json({
        success: false,
        error: 'Too many messages sent. Please wait 10 minutes before submitting another inquiry.'
      });
    }

    // 3. Server-side Input Validation
    const cleanName = (name || '').trim();
    const cleanEmail = (email || '').trim();
    const cleanSubject = (subject || '').trim();
    const cleanMessage = (message || '').trim();

    if (!cleanName || cleanName.length < 2) {
      return res.status(400).json({ success: false, error: 'Name must be at least 2 characters.' });
    }
    if (!cleanEmail || !EMAIL_REGEX.test(cleanEmail)) {
      return res.status(400).json({ success: false, error: 'A valid email address is required.' });
    }
    if (!cleanSubject || cleanSubject.length < 3) {
      return res.status(400).json({ success: false, error: 'Subject must be at least 3 characters.' });
    }
    if (!cleanMessage || cleanMessage.length < 10) {
      return res.status(400).json({ success: false, error: 'Message must be at least 10 characters.' });
    }

    const messageId = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const formattedDate = submissionDate || new Date().toISOString();

    const inquiryRecord = {
      id: messageId,
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
      ip: clientIp,
      submissionDate: formattedDate,
      receivedAt: new Date().toISOString(),
      recipient: recipientEmail || process.env.VITE_RECIPIENT_EMAIL || 'amanamonibalaji1828@gmail.com'
    };

    // 4. Message Storage in database / file storage
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const dbPath = path.join(dataDir, 'inquiries.json');
      let existingInquiries = [];
      if (fs.existsSync(dbPath)) {
        try {
          existingInquiries = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        } catch (e) {
          existingInquiries = [];
        }
      }
      existingInquiries.unshift(inquiryRecord);
      fs.writeFileSync(dbPath, JSON.stringify(existingInquiries.slice(0, 100), null, 2), 'utf8');
    } catch (fsErr) {
      // In serverless environments where local filesystem might be read-only, log safely
      console.log('Inquiry logged in memory:', inquiryRecord.id);
    }

    // 5. Email Dispatch via EmailJS REST API if configured
    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID;
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY;
    const privateKey = process.env.EMAILJS_PRIVATE_KEY;

    let emailSent = false;
    if (serviceId && templateId && publicKey && !serviceId.includes('your_')) {
      try {
        const emailjsPayload = {
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: cleanName,
            from_email: cleanEmail,
            reply_to: cleanEmail,
            to_name: 'Amanamoni Balaji',
            to_email: inquiryRecord.recipient,
            subject: cleanSubject,
            message: cleanMessage,
            submission_date: formattedDate
          }
        };

        if (privateKey) {
          emailjsPayload.accessToken = privateKey;
        }

        const emailRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(emailjsPayload)
        });

        if (emailRes.ok) {
          emailSent = true;
        } else {
          const errText = await emailRes.text();
          console.warn('EmailJS API error response:', errText);
        }
      } catch (err) {
        console.warn('EmailJS fetch error on server:', err.message);
      }
    }

    return res.status(200).json({
      success: true,
      messageId,
      emailDelivered: emailSent,
      message: "Your message has been sent successfully! I'll get back to you soon.",
      data: {
        id: messageId,
        date: formattedDate
      }
    });
  } catch (error) {
    console.error('Contact endpoint error:', error);
    return res.status(500).json({
      success: false,
      error: 'Internal server error while processing message.'
    });
  }
}
