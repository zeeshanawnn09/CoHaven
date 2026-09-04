import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const allowedOrigins = new Set([
  'https://co-haven.co',
  'https://www.co-haven.co',
  'https://cohaven-nu.vercel.app',
  'https://zeeshanawnn09.github.io',
]);

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  })[character] ?? character);

const clean = (value: unknown, maxLength: number) =>
  typeof value === 'string' ? value.trim().slice(0, maxLength) : '';

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const origin = request.headers.origin;

  if (origin && allowedOrigins.has(origin)) {
    response.setHeader('Access-Control-Allow-Origin', origin);
    response.setHeader('Vary', 'Origin');
  }

  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') return response.status(204).end();
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed.' });
  if (origin && !allowedOrigins.has(origin)) return response.status(403).json({ error: 'Origin not allowed.' });

  const body = request.body ?? {};
  const company = clean(body.company, 120);

  if (company) return response.status(200).json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 254);
  const market = clean(body.market, 160);
  const properties = clean(body.properties, 12);
  const support = clean(body.support, 120);
  const message = clean(body.message, 3000);

  if (!name || !email || !market || !properties || !support || !/^\S+@\S+\.\S+$/.test(email)) {
    return response.status(400).json({ error: 'Please complete all required fields.' });
  }

  if (!process.env.RESEND_API_KEY) {
    return response.status(500).json({ error: 'Email service is not configured.' });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const domain = process.env.RESEND_EMAIL_DOMAIN || 'co-haven.co';
  const { error } = await resend.emails.send({
    from: `CoHaven Website <website@${domain}>`,
    to: ['zac@co-haven.co'],
    replyTo: email,
    subject: `New CoHaven enquiry — ${name} in ${market}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Market: ${market}`,
      `Properties: ${properties}`,
      `Support: ${support}`,
      '',
      'Property details:',
      message || 'Not provided',
    ].join('\n'),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;color:#17382d">
        <h1 style="font-size:28px">New property enquiry</h1>
        <table style="width:100%;border-collapse:collapse">
          <tbody>
            <tr><td style="padding:8px 0;font-weight:700">Name</td><td>${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Market</td><td>${escapeHtml(market)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Properties</td><td>${escapeHtml(properties)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700">Support</td><td>${escapeHtml(support)}</td></tr>
          </tbody>
        </table>
        <h2 style="margin-top:28px;font-size:18px">Property details</h2>
        <p style="line-height:1.7;white-space:pre-wrap">${escapeHtml(message || 'Not provided')}</p>
      </div>
    `,
  });

  if (error) return response.status(502).json({ error: 'Email delivery failed.' });
  return response.status(200).json({ ok: true });
}
