export async function sendEmailLog() {
    let token = process.env.ZENTRO_TOKEN || "";
    try {
      const res = await fetch(process.env.ZENTRO_URL + "/send-email-html", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": token,
        },
        body: JSON.stringify({
          from: "amilasaad@gmail.com",
          to: "amilasaad@gmail.com",
          subject: "New Visit to AmilAsaad v2",
          html: '<!DOCTYPE html><html><body style="margin:0; padding:0; background:#0b1220; font-family:Arial, sans-serif;"><div style="max-width:520px; margin:48px auto; padding:0 16px;"><div style="background:#111827; border:1px solid #1f2937; border-radius:14px; overflow:hidden;"><div style="padding:22px 24px; background:linear-gradient(135deg,#1f2937,#111827); text-align:left;"><h2 style="margin:0; color:#f9fafb; font-size:18px; letter-spacing:0.3px;">Security Alert</h2><p style="margin:6px 0 0; color:#94a3b8; font-size:13px;">Real-time activity notification</p></div><div style="padding:24px; text-align:left;"><div style="display:inline-block; padding:6px 10px; border-radius:999px; background:#312e81; color:#c4b5fd; font-size:12px; margin-bottom:16px;">New Visit Detected</div><p style="margin:0 0 16px; color:#cbd5e1; font-size:14px; line-height:1.5;">Someone has just accessed or visited your V2 Portfolio Website.</p><div style="background:#0f172a; border:1px solid #1f2937; border-radius:10px; padding:14px 16px; margin-bottom:16px;"><p style="margin:0; color:#a78bfa; font-weight:bold; font-size:14px;">⚡ New session activity detected</p><p style="margin:6px 0 0; color:#94a3b8; font-size:12px;">No additional details available at this time</p></div></div><div style="padding:14px 24px; border-top:1px solid #1f2937; text-align:center;"><p style="margin:0; color:#475569; font-size:11px;">AmilAsaad v2.0 Security System • Automated Notification</p></div></div></div></body></html>',
        }),
      });

      if (!res.ok) throw new Error("Failed to send email");
    } catch (err) {
      // Wala
    }
}