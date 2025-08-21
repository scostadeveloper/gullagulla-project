import type { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";

// Endpoint simples para encaminhar eventos para a Meta Conversion API
// Expects POST with body equal to the object the user provided in the request

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const accessToken = process.env.META_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID;

  if (!accessToken || !pixelId) {
    return res.status(500).json({
      error:
        "Server not configured: META_ACCESS_TOKEN or META_PIXEL_ID missing",
    });
  }

  const incoming = req.body || {};
  // debug log incoming payload (trim large fields if necessary)
  console.log('meta-conversion incoming event count:', Array.isArray(incoming.data) ? incoming.data.length : 0);

  // captura user agent e ip do cliente para melhorar atribuição
  const client_user_agent = req.headers["user-agent"] || "";
  const forwarded = req.headers["x-forwarded-for"] as string | undefined;
  const client_ip_address = forwarded
    ? forwarded.split(",")[0].trim()
    : req.socket?.remoteAddress || "";

  // enriquecer cada event do payload sem sobrescrever user_data existente
  const outgoing = { ...incoming };
  if (Array.isArray(outgoing.data)) {
    outgoing.data = outgoing.data.map((ev: any) => {
      const evCopy = { ...ev };
      evCopy.user_data = evCopy.user_data || {};
      // não sobrescrever em/ph se já existentes
      if (!evCopy.user_data.client_user_agent)
        evCopy.user_data.client_user_agent = client_user_agent;
      if (!evCopy.user_data.client_ip_address)
        evCopy.user_data.client_ip_address = client_ip_address;
      return evCopy;
    });
  }

  try {
  console.log('meta-conversion outgoing payload prepared');
  const response = await fetch(
      `https://graph.facebook.com/v17.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(outgoing),
      }
    );

    const json = await response.json();
    return res.status(response.ok ? 200 : 502).json(json);
  } catch (err: any) {
    return res.status(500).json({ error: String(err) });
  }
}
