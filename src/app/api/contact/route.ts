import { NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  eventType: string;
  guestCount: string;
  preferredDates: string;
  message: string;
}

const EVENT_TYPE_LABELS: Record<string, string> = {
  vacation: "Family Vacation",
  "group-getaway": "Friends / Group Getaway",
  reunion: "Family Reunion",
  "corporate-retreat": "Corporate Retreat",
  "team-building": "Team Building",
  conference: "Conference / Meeting",
  "incentive-trip": "Incentive Trip",
  "product-launch": "Product Launch",
  "executive-offsite": "Executive Offsite",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.eventType || !body.message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Build email content
    const eventTypeLabel = EVENT_TYPE_LABELS[body.eventType] || body.eventType;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0c2a3a; color: white; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Inquiry</h1>
          <p style="margin: 8px 0 0; color: #d4a843;">SerenitySpaces Bahamas</p>
        </div>
        <div style="padding: 24px; border: 1px solid #e8d0ad; border-top: none; border-radius: 0 0 8px 8px;">
          <h2 style="color: #0c2a3a; font-size: 18px; margin-top: 0;">Contact Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Name:</td>
              <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(body.name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #666;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(body.email)}">${escapeHtml(body.email)}</a></td>
            </tr>
            ${body.company ? `<tr><td style="padding: 8px 0; color: #666;">Company:</td><td style="padding: 8px 0;">${escapeHtml(body.company)}</td></tr>` : ""}
            ${body.phone ? `<tr><td style="padding: 8px 0; color: #666;">Phone:</td><td style="padding: 8px 0;">${escapeHtml(body.phone)}</td></tr>` : ""}
          </table>

          <h2 style="color: #0c2a3a; font-size: 18px;">Event Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #666; width: 140px;">Event Type:</td>
              <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(eventTypeLabel)}</td>
            </tr>
            ${body.guestCount ? `<tr><td style="padding: 8px 0; color: #666;">Guests:</td><td style="padding: 8px 0;">${escapeHtml(body.guestCount)}</td></tr>` : ""}
            ${body.preferredDates ? `<tr><td style="padding: 8px 0; color: #666;">Preferred Dates:</td><td style="padding: 8px 0;">${escapeHtml(body.preferredDates)}</td></tr>` : ""}
          </table>

          <h2 style="color: #0c2a3a; font-size: 18px;">Message</h2>
          <div style="background: #fdf8f0; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${escapeHtml(body.message)}</div>

          <hr style="margin: 24px 0; border: none; border-top: 1px solid #e8d0ad;" />
          <p style="color: #999; font-size: 12px; margin: 0;">
            This inquiry was submitted via the SerenitySpaces Bahamas website contact form.
          </p>
        </div>
      </div>
    `;

    const textContent = `
New Inquiry - SerenitySpaces Bahamas
==========================================

Contact Details:
- Name: ${body.name}
- Email: ${body.email}
${body.company ? `- Company: ${body.company}` : ""}
${body.phone ? `- Phone: ${body.phone}` : ""}

Event Details:
- Event Type: ${eventTypeLabel}
${body.guestCount ? `- Estimated Guests: ${body.guestCount}` : ""}
${body.preferredDates ? `- Preferred Dates: ${body.preferredDates}` : ""}

Message:
${body.message}
    `.trim();

    // Build mailto fallback URL for use if SMTP is not configured or fails
    const subject = `New Inquiry from ${body.name}${body.company ? ` (${body.company})` : ""} - ${eventTypeLabel}`;
    const mailtoUrl = `mailto:andrew@web4guru.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(textContent)}`;

    // ── Delivery ──────────────────────────────────────────────────────────
    // Sent through Resend's HTTP API on port 443, NOT SMTP.
    //
    // This form lost every inquiry from launch in April 2026 until September:
    // no mail credentials were ever set, so it always fell back to a mailto:
    // link, which does nothing on most phones. When SMTP credentials were then
    // added, Railway turned out to block outbound SMTP ports, so the connection
    // hung for two minutes and the visitor's form spun. HTTPS cannot be blocked
    // that way. Do not go back to SMTP on this host.
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set; inquiry not delivered.");
      return NextResponse.json({
        success: false,
        fallback: true,
        mailtoUrl,
        error: "Please use the link below to send your inquiry directly.",
      });
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10_000);
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.MAIL_FROM || "SerenitySpaces Bahamas <andrew@web4guru.com>",
          to: [process.env.MAIL_TO || "andrew@web4guru.com"],
          reply_to: body.email,
          subject,
          text: textContent,
          html: htmlContent,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const detail = await res.text();
        console.error(`Resend rejected the inquiry (${res.status}):`, detail);
        return NextResponse.json({
          success: false,
          fallback: true,
          mailtoUrl,
          error: "Unable to send automatically. Please use the link below.",
        });
      }

      return NextResponse.json({ success: true });
    } catch (sendError) {
      console.error("Inquiry delivery failed:", sendError);
      return NextResponse.json({
        success: false,
        fallback: true,
        mailtoUrl,
        error: "Unable to send automatically. Please use the link below.",
      });
    } finally {
      clearTimeout(timer);
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        error:
          "Failed to send your message. Please email us directly at andrew@web4guru.com.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
