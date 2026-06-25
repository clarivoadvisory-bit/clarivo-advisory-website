import { Resend } from "resend";
import { logger } from "./logger";

const RESEND_API_KEY = process.env["RESEND_API_KEY"];
const FROM_EMAIL = process.env["RESEND_FROM_EMAIL"] ?? "Clarivo Advisory <onboarding@resend.dev>";
const OWNER_EMAILS = ["shiv@clarivoadvisory.com", "clarivoadvisory@gmail.com"];

function getClient(): Resend | null {
  if (!RESEND_API_KEY) {
    logger.warn("RESEND_API_KEY not set — email notifications disabled");
    return null;
  }
  return new Resend(RESEND_API_KEY);
}

interface LeadEmailData {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  projectType?: string | null;
  budget?: string | null;
  message: string;
}

export async function sendOwnerNotification(lead: LeadEmailData): Promise<void> {
  const resend = getClient();
  if (!resend) return;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: OWNER_EMAILS,
      subject: `New Consulting Inquiry from ${lead.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background: #040E1E; color: #ffffff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { background: linear-gradient(135deg, #071B3B, #0D2952); padding: 30px; border-radius: 12px 12px 0 0; border-bottom: 2px solid #F4B400; text-align: center; }
            .header h1 { color: #F4B400; margin: 0; font-size: 24px; }
            .body { background: #071B3B; padding: 30px; border-radius: 0 0 12px 12px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; }
            .label { color: #9CA3AF; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px; }
            .value { color: #ffffff; font-size: 16px; }
            .message-box { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 16px; margin-top: 8px; }
            .badge { display: inline-block; background: #F4B400; color: #040E1E; font-weight: bold; padding: 4px 12px; border-radius: 20px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Consulting Inquiry</h1>
              <p style="color: #9CA3AF; margin: 8px 0 0;">Clarivo Advisory Lead Alert</p>
            </div>
            <div class="body">
              <span class="badge">NEW LEAD</span>
              <br><br>
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${lead.name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${lead.email}" style="color: #F4B400;">${lead.email}</a></div>
              </div>
              ${lead.company ? `<div class="field"><div class="label">Company</div><div class="value">${lead.company}</div></div>` : ""}
              ${lead.phone ? `<div class="field"><div class="label">Phone / WhatsApp</div><div class="value">${lead.phone}</div></div>` : ""}
              ${lead.projectType ? `<div class="field"><div class="label">Project Type</div><div class="value">${lead.projectType}</div></div>` : ""}
              ${lead.budget ? `<div class="field"><div class="label">Budget Range</div><div class="value">${lead.budget}</div></div>` : ""}
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${lead.message.replace(/\n/g, "<br>")}</div>
              </div>
              <p style="color: #6B7280; font-size: 12px; margin-top: 30px;">
                Submitted via clarivoadvisory.com · Reply directly to the lead at ${lead.email}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: lead.email,
    });
    if (error) {
      logger.error({ error, from: FROM_EMAIL, to: OWNER_EMAILS }, "Resend rejected owner notification");
    } else {
      logger.info({ messageId: data?.id, from: FROM_EMAIL, to: OWNER_EMAILS }, "Owner notification sent");
    }
  } catch (err) {
    logger.error({ err }, "Failed to send owner notification email");
  }
}

export async function sendUserConfirmation(lead: LeadEmailData): Promise<void> {
  const resend = getClient();
  if (!resend) return;

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: lead.email,
      subject: "Thank You for Contacting Clarivo Advisory",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background: #040E1E; color: #ffffff; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 40px 20px; }
            .header { background: linear-gradient(135deg, #071B3B, #0D2952); padding: 40px 30px; border-radius: 12px 12px 0 0; border-bottom: 2px solid #F4B400; text-align: center; }
            .logo { color: #F4B400; font-size: 22px; font-weight: bold; margin-bottom: 8px; }
            .header h1 { color: #ffffff; margin: 0; font-size: 26px; }
            .body { background: #071B3B; padding: 35px 30px; border-radius: 0 0 12px 12px; }
            .highlight { background: rgba(244, 180, 0, 0.1); border-left: 3px solid #F4B400; padding: 16px 20px; border-radius: 0 8px 8px 0; margin: 24px 0; }
            .info-item { display: flex; align-items: center; gap: 12px; margin-bottom: 16px; }
            .icon { width: 36px; height: 36px; background: rgba(244,180,0,0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #F4B400; font-size: 16px; flex-shrink: 0; }
            .cta { display: inline-block; background: #F4B400; color: #040E1E; font-weight: bold; padding: 14px 32px; border-radius: 6px; text-decoration: none; margin-top: 20px; }
            .footer { color: #6B7280; font-size: 12px; margin-top: 30px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">CLARIVO ADVISORY</div>
              <h1>Thank You, ${lead.name}!</h1>
              <p style="color: #9CA3AF; margin: 12px 0 0;">Your inquiry has been received.</p>
            </div>
            <div class="body">
              <p style="color: #D1D5DB; line-height: 1.7;">
                Thank you for reaching out to Clarivo Advisory. I've received your enquiry regarding <strong style="color: #F4B400;">${lead.projectType ?? "your project"}</strong> and will personally review it.
              </p>

              <div class="highlight">
                <strong style="color: #F4B400;">What happens next?</strong>
                <ul style="color: #D1D5DB; margin: 10px 0 0; padding-left: 20px; line-height: 1.8;">
                  <li>I'll review your enquiry personally within <strong>24 hours</strong></li>
                  <li>We'll schedule a complimentary 30-minute strategy call</li>
                  <li>I'll provide initial thoughts on your project</li>
                </ul>
              </div>

              <p style="color: #D1D5DB;">For urgent matters, you can reach me directly:</p>

              <div class="info-item">
                <div class="icon">📧</div>
                <div>
                  <div style="color: #9CA3AF; font-size: 12px;">Email</div>
                  <div><a href="mailto:shiv@clarivoadvisory.com" style="color: #F4B400;">shiv@clarivoadvisory.com</a></div>
                </div>
              </div>
              <div class="info-item">
                <div class="icon">📱</div>
                <div>
                  <div style="color: #9CA3AF; font-size: 12px;">WhatsApp</div>
                  <div><a href="https://wa.me/917600048237" style="color: #F4B400;">+91-7600048237</a></div>
                </div>
              </div>

              <a href="https://wa.me/917600048237?text=Hi%20Shiv%2C%20following%20up%20on%20my%20enquiry." class="cta">Chat on WhatsApp</a>

              <div class="footer">
                <p>Clarivo Advisory · Ahmedabad, Gujarat, India</p>
                <p>This is an automated confirmation. Please do not reply to this email.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });
    if (error) {
      logger.error({ error, from: FROM_EMAIL, to: lead.email }, "Resend rejected user confirmation");
    } else {
      logger.info({ messageId: data?.id, from: FROM_EMAIL, to: lead.email }, "User confirmation sent");
    }
  } catch (err) {
    logger.error({ err }, "Failed to send user confirmation email");
  }
}
