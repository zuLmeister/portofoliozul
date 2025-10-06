// /api/chat.js
export default async function handler(req, res) {
  const body = await req.json();

  const lunosRes = await fetch("https://api.lunos.tech/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.LUNOS_API_KEY}`,
    },
    body: JSON.stringify(body),
  });

  const data = await lunosRes.json();
  return res.status(200).json(data);
}
