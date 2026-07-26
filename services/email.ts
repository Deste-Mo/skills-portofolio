import nodemailer from "nodemailer"

export interface SendEmailParams {
  name: string
  email: string
  message: string
}

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  })
}

function baseStyle() {
  return `
    * { margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.7; color: #1d1c20; padding: 24px; }
    p { margin-bottom: 16px; }
    strong { color: #1d1c20; }
    a { color: #1d1c20; }
    .meta { margin-bottom: 20px; }
    .meta p { font-size: 12px; color: #888; margin-bottom: 2px; }
    .meta span { display: block; margin-bottom: 12px; }
    hr { border: none; border-top: 1px solid #ddd; margin: 20px 0; }
    .msg { white-space: pre-wrap; }
  `
}

function notificationTemplate(name: string, email: string, message: string) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${baseStyle()}</style></head>
<body>
<div class="meta">
  <p>De</p>
  <span>${name}</span>
  <p>Email</p>
  <span><a href="mailto:${email}">${email}</a></span>
</div>
<hr>
<p class="msg">${message}</p>
</body></html>`
}

function autoReplyTemplate(name: string) {
  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>${baseStyle()}</style></head>
<body>
<p>Bonjour ${name},</p>
<p>Merci de m'avoir écrit. J'ai bien reçu votre message et je prends le temps d'y répondre avec attention. Je vous contacte dans les meilleurs délais.</p>
<p>Bien cordialement,</p>
<p><strong>Modeste TOLOJANAHARY</strong><br>Développeur &amp; Designer UI</p>
</body></html>`
}

export async function sendContactEmail({ name, email, message }: SendEmailParams): Promise<void> {
  const transporter = createTransporter()

  await Promise.all([
    transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Nouveau message de ${name} - Portfolio`,
      html: notificationTemplate(name, email, message),
    }),

    transporter.sendMail({
      from: `"Modeste TOLOJANAHARY" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Merci pour votre message - Modeste TOLOJANAHARY",
      html: autoReplyTemplate(name),
    }),
  ])
}
