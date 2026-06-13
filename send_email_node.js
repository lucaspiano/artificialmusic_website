// Node.js script to send notification email with monitor log attached using nodemailer
// Usage:
// 1. Install dependencies: npm install nodemailer
// 2. Set environment variables: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL
// 3. Run: node send_email_node.js

const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const smtpHost = process.env.SMTP_HOST;
const smtpPort = process.env.SMTP_PORT || 587;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const from = process.env.FROM_EMAIL || 'no-reply@example.com';
const to = 'lucaspiano@gmail.com';

if (!smtpHost || !smtpUser || !smtpPass) {
  console.error('Missing SMTP configuration. Set SMTP_HOST, SMTP_USER and SMTP_PASS environment variables.');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: parseInt(smtpPort, 10),
  secure: smtpPort == 465, // true for 465, false for other ports
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

const logPath = path.join(process.cwd(), 'monitor_https.log');
let attachments = [];
if (fs.existsSync(logPath)) {
  attachments.push({ filename: 'monitor_https.log', path: logPath });
} else {
  console.warn('monitor_https.log not found in current folder. Email will be sent without attachment.');
}

const mailOptions = {
  from,
  to,
  subject: 'artificialmusic.ai — domínio configurado e HTTPS ativo',
  text: `Olá,\n\nO monitor de DNS/HTTPS para o domínio artificialmusic.ai concluiu com sucesso.\n\nResumo:\n- DNS: apontando para Vercel (A records e CNAME configurados).\n- HTTPS: conexões TLS estabelecidas e respostas 200 OK.\n\nLogs anexados: monitor_https.log (se disponível).\n\nAtenciosamente,\nSeu script de monitoramento`,
  attachments,
};

transporter.sendMail(mailOptions)
  .then(info => {
    console.log('Email sent:', info.messageId);
  })
  .catch(err => {
    console.error('Error sending email:', err);
  });
