// Vercel Serverless Function: proxy to an external webhook (set SUBMIT_WEBHOOK env var in deployment)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const webhook = process.env.SUBMIT_WEBHOOK
  if (!webhook) {
    console.error('SUBMIT_WEBHOOK not configured')
    return res.status(500).json({ error: 'Webhook not configured' })
  }

  try {
    const payload = req.body
    const r = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!r.ok) {
      const text = await r.text()
      console.error('Webhook responded', r.status, text)
      return res.status(502).json({ error: 'Bad gateway' })
    }
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Internal error' })
  }
}
