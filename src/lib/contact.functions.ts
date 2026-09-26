import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact-schema";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export const sendContactMessage = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const RESEND_API_KEY = process.env["RESEND_API_KEY"];
    if (!RESEND_API_KEY) {
      console.info("Enquiry received successfully (demo/local mode):", data);
      return { ok: true as const };
    }
    const rows = [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone || "—"],
      ["Service", data.service],
      ["Budget", data.budget],
      ["Message", data.message],
    ];
    const html = `<h2>New enquiry from maxxedtech.com</h2><table>${rows.map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`).join("")}</table>`;
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Maxxed Tech <contact@maxxedtech.com>",
          to: ["contact@maxxedtech.com"],
          reply_to: data.email,
          subject: `New enquiry: ${data.service} — ${data.name}`,
          html,
        }),
      });
      if (!res.ok) {
        console.error(`Email dispatch returned status ${res.status}`);
        return { ok: false as const };
      }
      return { ok: true as const };
    } catch (err) {
      console.error("Failed to send contact email:", err);
      return { ok: false as const };
    }
  });
