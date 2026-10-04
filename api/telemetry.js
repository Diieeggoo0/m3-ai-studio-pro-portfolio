export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const webhookUrl = process.env.DISCORD_WEBHOOK;
  if (!webhookUrl) return res.status(200).json({ notice: 'No webhook configured' });

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    return res.status(response.ok ? 200 : 500).json({ success: response.ok });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}