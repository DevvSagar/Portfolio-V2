import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import nodemailer from 'nodemailer';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'vite-plugin-smtp-contact',
        configureServer(server) {
          server.middlewares.use('/api/contact', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
              return;
            }

            let body = '';
            req.on('data', chunk => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                const { name, email, subject, message } = JSON.parse(body || '{}');

                if (!name || !email || !message) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Name, email, and message are required.' }));
                  return;
                }

                // Email format validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Please provide a valid email address.' }));
                  return;
                }

                const smtpHost = env.SMTP_HOST || process.env.SMTP_HOST || 'smtp.gmail.com';
                const smtpPort = parseInt(env.SMTP_PORT || process.env.SMTP_PORT || '465', 10);
                const smtpSecure = (env.SMTP_SECURE || process.env.SMTP_SECURE || 'true') === 'true';
                const smtpUser = env.SMTP_USER || process.env.SMTP_USER;
                const smtpPass = env.SMTP_PASS || process.env.SMTP_PASS;
                const recipientEmail = env.CONTACT_RECIPIENT_EMAIL || process.env.CONTACT_RECIPIENT_EMAIL || 'deevvxxx@gmail.com';

                if (!smtpUser || !smtpPass) {
                  res.statusCode = 503;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ 
                    error: 'SMTP credentials are not configured yet. Please configure SMTP_USER and SMTP_PASS in your .env file.' 
                  }));
                  return;
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

                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: true, message: 'Message sent successfully!' }));
              } catch (err) {
                console.error('SMTP Mail error:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'Failed to dispatch email via SMTP.' }));
              }
            });
          });
        }
      }
    ],
    server: {
      port: 3000,
      open: false
    }
  };
});
