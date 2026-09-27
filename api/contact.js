import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpSecure = (process.env.SMTP_SECURE || 'true') === 'true';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'deevvxxx@gmail.com';

    if (!smtpUser || !smtpPass) {
      return res.status(503).json({
        error: 'SMTP credentials are not configured yet. Please configure SMTP_USER and SMTP_PASS in your environment variables.'
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${name} (Portfolio)" <${smtpUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `[Portfolio Inquiry] ${subject ? subject : 'Message from ' + name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || 'No Subject'}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #0f1d33; color: #cbd5e1; border-radius: 12px; border: 1px solid #2a436f;">
          <div style="border-bottom: 2px solid #ff4b5c; padding-bottom: 12px; margin-bottom: 20px;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px;">New Message from Portfolio Contact Form</h2>
            <span style="color: #ff4b5c; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Direct Inquiry</span>
          </div>
          
          <div style="margin-bottom: 16px;">
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #ffffff;">Sender Name:</strong> ${name}</p>
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #ffffff;">Sender Email:</strong> <a href="mailto:${email}" style="color: #ff4b5c; text-decoration: none;">${email}</a></p>
            <p style="margin: 6px 0; font-size: 14px;"><strong style="color: #ffffff;">Subject:</strong> ${subject || 'General Inquiry'}</p>
          </div>

          <div style="margin-top: 20px; background-color: #14243f; border: 1px solid #243a60; border-radius: 8px; padding: 16px;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #94a7c6; font-weight: bold; letter-spacing: 0.5px;">Message Content:</p>
            <p style="margin: 0; font-size: 14px; color: #f1f5f9; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #1e3458; font-size: 12px; color: #64748b; text-align: center;">
            Delivered directly to ${recipientEmail} via Sagar's Portfolio Contact System
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('SMTP Error:', err);
    return res.status(500).json({ error: err.message || 'Failed to dispatch email via SMTP.' });
  }
}
