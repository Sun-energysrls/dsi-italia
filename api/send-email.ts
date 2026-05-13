import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// --- Rate limiting (in-memory, per serverless instance) ---
const rateMap = new Map<string, number[]>();
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT) {
    rateMap.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

// --- Validation ---
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: Record<string, unknown>): string | null {
  const { name, email, subject, message } = body;

  if (!name || typeof name !== "string" || !name.trim())
    return "Il campo Nome è obbligatorio.";
  if (!email || typeof email !== "string" || !email.trim())
    return "Il campo Email è obbligatorio.";
  if (!EMAIL_RE.test(email)) return "Indirizzo email non valido.";
  if (!subject || typeof subject !== "string" || !subject.trim())
    return "Seleziona un argomento.";
  if (!message || typeof message !== "string" || !message.trim())
    return "Il campo Messaggio è obbligatorio.";

  if ((name as string).length > 100)
    return "Il nome non può superare i 100 caratteri.";
  if ((email as string).length > 254)
    return "L'email non può superare i 254 caratteri.";
  if ((message as string).length > 2000)
    return "Il messaggio non può superare i 2000 caratteri.";
  if (typeof body.phone === "string" && body.phone.length > 30)
    return "Il telefono non può superare i 30 caratteri.";

  return null;
}

// --- Subject label map ---
const subjectLabels: Record<string, string> = {
  trattori: "Trattori",
  accessori: "Accessori",
  assistenza: "Assistenza",
};

// --- Escape HTML ---
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// --- Handler ---
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Metodo non consentito." });
  }

  // Rate limit
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    return res
      .status(429)
      .json({ error: "Troppe richieste, riprova tra qualche minuto." });
  }

  // Validate
  const { name, email, phone, subject, message } = req.body || {};
  const validationError = validate(req.body || {});
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }

  const subjectLabel = subjectLabels[subject] || subject;
  const phoneLine = phone ? phone : "Non fornito";

  // Build email content
  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <div style="border-bottom: 3px solid #F97316; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="margin: 0; font-size: 20px; color: #1b3a2d;">Nuova richiesta dal sito DSI Import</h1>
      </div>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 12px; font-weight: 600; color: #555; width: 140px; vertical-align: top; border-bottom: 1px solid #eee;">Nome</td>
          <td style="padding: 10px 12px; color: #222; border-bottom: 1px solid #eee;">${esc(name)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: 600; color: #555; vertical-align: top; border-bottom: 1px solid #eee;">Email</td>
          <td style="padding: 10px 12px; color: #222; border-bottom: 1px solid #eee;"><a href="mailto:${esc(email)}" style="color: #F97316;">${esc(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: 600; color: #555; vertical-align: top; border-bottom: 1px solid #eee;">Telefono</td>
          <td style="padding: 10px 12px; color: #222; border-bottom: 1px solid #eee;">${esc(phoneLine)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: 600; color: #555; vertical-align: top; border-bottom: 1px solid #eee;">Argomento</td>
          <td style="padding: 10px 12px; color: #222; border-bottom: 1px solid #eee;">${esc(subjectLabel)}</td>
        </tr>
        <tr>
          <td style="padding: 10px 12px; font-weight: 600; color: #555; vertical-align: top;">Messaggio</td>
          <td style="padding: 10px 12px; color: #222; white-space: pre-wrap;">${esc(message)}</td>
        </tr>
      </table>
      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; color: #999;">
        Inviato dal form di contatto su dsimportsrl.com
      </div>
    </div>
  `;

  const text = [
    `Nuova richiesta dal sito DSI Import`,
    ``,
    `Nome: ${name}`,
    `Email: ${email}`,
    `Telefono: ${phoneLine}`,
    `Argomento: ${subjectLabel}`,
    ``,
    `Messaggio:`,
    message,
  ].join("\n");

  // Send via Resend
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM!,
      to: process.env.CONTACT_EMAIL_TO!,
      replyTo: email,
      subject: `Nuova richiesta dal sito DSI Import — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return res
        .status(500)
        .json({ error: "Errore nell'invio dell'email. Riprova più tardi." });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return res
      .status(500)
      .json({ error: "Errore nell'invio dell'email. Riprova più tardi." });
  }
}
