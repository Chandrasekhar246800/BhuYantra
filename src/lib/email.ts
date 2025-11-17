import nodemailer from 'nodemailer'

// Create transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'bhuyantra2468@gmail.com',
    pass: process.env.EMAIL_APP_PASSWORD || 'sxtowyjgcyymggrk',
  },
})

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  organization?: string
  message: string
}

// Send notification email to admin
export async function sendAdminNotification(data: ContactFormData) {
  const mailOptions = {
    from: `"BhuYanthra Contact Form" <bhuyantra2468@gmail.com>`,
    to: 'bhuyantra2468@gmail.com',
    subject: `New Contact Form Submission - ${data.firstName} ${data.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 10px;
            }
            .header {
              background: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%);
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
            }
            .label {
              font-weight: bold;
              color: #22c55e;
              margin-bottom: 5px;
            }
            .value {
              padding: 10px;
              background-color: #f3f4f6;
              border-radius: 5px;
              border-left: 3px solid #22c55e;
            }
            .message-box {
              background-color: #f0f9ff;
              padding: 15px;
              border-radius: 5px;
              border-left: 3px solid #3b82f6;
              white-space: pre-wrap;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🌾 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">BhuYanthra - Smart Agriculture Platform</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">📝 Name:</div>
                <div class="value">${data.firstName} ${data.lastName}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              
              ${data.organization ? `
              <div class="field">
                <div class="label">🏢 Organization:</div>
                <div class="value">${data.organization}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="message-box">${data.message}</div>
              </div>
              
              <div class="footer">
                <p><strong>Action Required:</strong> Please respond to this inquiry within 24-48 hours.</p>
                <p>Received at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  await transporter.sendMail(mailOptions)
}

// Send confirmation email to user
export async function sendUserConfirmation(data: ContactFormData) {
  const mailOptions = {
    from: `"BhuYanthra" <bhuyantra2468@gmail.com>`,
    to: data.email,
    subject: 'Thank you for contacting BhuYanthra - We\'ll be in touch soon!',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 10px;
            }
            .header {
              background: linear-gradient(135deg, #22c55e 0%, #3b82f6 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .message-summary {
              background-color: #f0f9ff;
              padding: 20px;
              border-radius: 8px;
              border-left: 4px solid #3b82f6;
              margin: 20px 0;
            }
            .cta-button {
              display: inline-block;
              background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
              color: white;
              padding: 15px 30px;
              text-decoration: none;
              border-radius: 8px;
              font-weight: bold;
              margin: 20px 0;
            }
            .info-box {
              background-color: #fef3c7;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #f59e0b;
              margin: 20px 0;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280;
              font-size: 14px;
            }
            .contact-info {
              margin-top: 20px;
              padding: 15px;
              background-color: #f3f4f6;
              border-radius: 8px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 32px;">🌾 Thank You for Contacting Us!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 18px;">BhuYanthra - Smart Agriculture Platform</p>
            </div>
            <div class="content">
              <p style="font-size: 18px; margin-bottom: 20px;">Dear <strong>${data.firstName} ${data.lastName}</strong>,</p>
              
              <p>Thank you for reaching out to BhuYanthra! We have successfully received your message and greatly appreciate your interest in our smart agriculture platform.</p>
              
              <div class="info-box">
                <p style="margin: 0;"><strong>⏰ Response Time:</strong> Our team will review your inquiry and get back to you within <strong>24-48 hours</strong>.</p>
              </div>
              
              <div class="message-summary">
                <h3 style="margin-top: 0; color: #3b82f6;">📋 Your Message Summary:</h3>
                <p style="margin-bottom: 0; white-space: pre-wrap;">${data.message}</p>
              </div>
              
              <p>In the meantime, feel free to explore our platform and learn more about how BhuYanthra can help transform your agricultural operations with:</p>
              
              <ul style="line-height: 1.8;">
                <li>🛰️ Real-time Crop Health Monitoring</li>
                <li>🌤️ Weather Integration & Forecasting</li>
                <li>🐛 Pest & Disease Early Warning</li>
                <li>📈 Yield Production & Planning</li>
                <li>💧 Water Management System</li>
                <li>💰 Market Price Integration</li>
                <li>And much more...</li>
              </ul>
              
              <div style="text-align: center;">
                <a href="https://bhuyantra.vercel.app" class="cta-button">Visit Our Website</a>
              </div>
              
              <div class="contact-info">
                <h4 style="margin-top: 0; color: #22c55e;">📞 Contact Information:</h4>
                <p style="margin: 5px 0;">📧 Email: <a href="mailto:bhuyantra2468@gmail.com">bhuyantra2468@gmail.com</a></p>
                <p style="margin: 5px 0;">📱 Phone: <a href="tel:+919876543210">+91 9876543210</a></p>
                <p style="margin: 5px 0;">💬 WhatsApp: <a href="https://wa.me/919876543210">+91 9876543210</a></p>
                <p style="margin: 5px 0;">🌐 Website: <a href="https://bhuyantra.vercel.app">bhuyantra.vercel.app</a></p>
              </div>
              
              <div class="footer">
                <p><strong>BhuYanthra Team</strong></p>
                <p style="font-style: italic; margin-top: 10px;">"Empowering farmers with smart technology for a sustainable future"</p>
                <p style="margin-top: 20px; font-size: 12px;">This is an automated confirmation email. Please do not reply to this message.</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  }

  await transporter.sendMail(mailOptions)
}
