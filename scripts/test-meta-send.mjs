import fs from "fs";
import path from "path";

const envPath = path.resolve(process.cwd(), ".env.local");
if (!fs.existsSync(envPath)) throw new Error(".env.local not found");
const env = fs.readFileSync(envPath, "utf8").split(/\r?\n/).filter(Boolean);
const map = {};
for (const line of env) {
  const idx = line.indexOf("=");
  if (idx > -1) map[line.slice(0, idx).trim()] = line.slice(idx + 1);
}
const token = map["META_ACCESS_TOKEN"];
const pixel = map["META_PIXEL_ID"] || map["VITE_META_PIXEL_ID"];
if (!token || !pixel)
  throw new Error("META_ACCESS_TOKEN or META_PIXEL_ID not found in .env.local");

const ts = Math.floor(Date.now() / 1000);
const payload = {
  data: [
    {
      event_name: "Purchase",
      event_time: ts,
      action_source: "website",
      user_data: {
        em: [
          "7b17fb0bd173f625b58636fb796407c22b3d16fc78302d79f0fd30c2fc2fc068",
        ],
        ph: [null],
      },
      attribution_data: { attribution_share: "0.3" },
      custom_data: { currency: "USD", value: "142.52" },
      original_event_data: { event_name: "Purchase", event_time: ts },
    },
  ],
};

async function run() {
  try {
    const res = await fetch(
      `https://graph.facebook.com/v17.0/${pixel}/events?access_token=${token}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );
    const text = await res.text();
    console.log("Status:", res.status);
    try {
      console.log("Body:", JSON.parse(text));
    } catch (e) {
      console.log("Body (raw):", text);
    }
  } catch (err) {
    console.error("Request error:", err);
    process.exit(1);
  }
}

run();
