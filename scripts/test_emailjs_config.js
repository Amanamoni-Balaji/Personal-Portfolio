// Utility script to verify EmailJS configuration and test real delivery
import fs from 'fs';
import path from 'path';

function loadEnv() {
  const envPath = path.join(process.cwd(), '.env');
  if (!fs.existsSync(envPath)) {
    return {};
  }
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  const env = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [key, ...rest] = trimmed.split('=');
    if (key && rest.length > 0) {
      env[key.trim()] = rest.join('=').trim().replace(/^["']|["']$/g, '');
    }
  }
  return env;
}

async function testEmailDelivery() {
  console.log('==================================================');
  console.log('AMANAMONI BALAJI PORTFOLIO — EMAILJS CONFIG TEST');
  console.log('==================================================\n');

  const env = loadEnv();
  const serviceId = env.VITE_EMAILJS_SERVICE_ID || process.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = env.VITE_EMAILJS_TEMPLATE_ID || process.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = env.VITE_EMAILJS_PUBLIC_KEY || process.env.VITE_EMAILJS_PUBLIC_KEY;
  const recipientEmail = env.VITE_RECIPIENT_EMAIL || 'amanamonibalaji1828@gmail.com';

  console.log('1. Checking Environment Variables in .env:');
  console.log(`   - VITE_EMAILJS_SERVICE_ID:  ${serviceId ? '✓ Found (' + serviceId.substring(0, 8) + '...)' : '✗ Missing'}`);
  console.log(`   - VITE_EMAILJS_TEMPLATE_ID: ${templateId ? '✓ Found (' + templateId.substring(0, 8) + '...)' : '✗ Missing'}`);
  console.log(`   - VITE_EMAILJS_PUBLIC_KEY:  ${publicKey ? '✓ Found (' + publicKey.substring(0, 6) + '...)' : '✗ Missing'}`);
  console.log(`   - Recipient Email:          ${recipientEmail}`);

  if (!serviceId || !templateId || !publicKey || serviceId.includes('your_') || templateId.includes('your_') || publicKey.includes('your_')) {
    console.log('\n[STATUS: CONFIGURATION REQUIRED]');
    console.log('To receive real emails in your inbox, add your actual EmailJS credentials to .env:');
    console.log('  1. Sign up at https://www.emailjs.com/');
    console.log('  2. Connect your Gmail under Email Services -> copy Service ID');
    console.log('  3. Create an Email Template -> copy Template ID');
    console.log('  4. Copy your Public Key from Account Settings -> API Keys');
    console.log('  5. Paste them into .env and run: node scripts/test_emailjs_config.js\n');
    return;
  }

  console.log('\n2. Testing Actual Email Dispatch via EmailJS API...');
  const testPayload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      from_name: 'Portfolio Verification Bot',
      from_email: 'noreply@portfolio-verification.local',
      reply_to: 'noreply@portfolio-verification.local',
      to_name: 'Amanamoni Balaji',
      to_email: recipientEmail,
      subject: 'Portfolio EmailJS Verification Test',
      message: 'This is a test notification confirming that your portfolio contact form is successfully connected to your EmailJS account and delivering messages directly to your inbox.',
      submission_date: new Date().toLocaleString('en-US')
    }
  };

  try {
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testPayload)
    });

    const status = res.status;
    const bodyText = await res.text();

    if (res.ok) {
      console.log(`\n>>> SUCCESS (HTTP ${status}): Email was accepted by EmailJS! <<<`);
      console.log(`Please check your inbox (${recipientEmail}) for the test message.`);
    } else {
      console.log(`\n>>> FAILED (HTTP ${status}): EmailJS rejected the test message <<<`);
      console.log(`Error Response: ${bodyText}`);
      console.log('Common reasons:');
      console.log('  - Invalid Public Key (check Account Settings > API Keys in EmailJS)');
      console.log('  - Incorrect Service ID (check Email Services in EmailJS)');
      console.log('  - Incorrect Template ID (check Email Templates in EmailJS)');
    }
  } catch (err) {
    console.error('\nNetwork error connecting to EmailJS API:', err.message);
  }
}

testEmailDelivery();
