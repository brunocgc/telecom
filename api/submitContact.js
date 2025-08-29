export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const webhook = process.env.SUBMIT_WEBHOOK
  if (!webhook) {
    // Do not expose the webhook URL in the response. Log for maintainers and return a generic error.
    console.error('SUBMIT_WEBHOOK not configured for submitContact function')
    return res.status(503).json({ error: 'Submission endpoint not configured. Please contact the site administrator.' })
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
    console.error('Error forwarding contact submission:', err)
    return res.status(500).json({ error: 'Internal error' })
  }
}
