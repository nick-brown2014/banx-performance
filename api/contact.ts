const businessInbox = 'jbtelkamp99@outlook.com'
const defaultSender = 'Banx Performance <contact@banxperformance.com>'
const emailPattern = /^[^\s@<>(),;:"\\]+@[^\s@<>(),;:"\\]+\.[^\s@<>(),;:"\\]+$/
const maxRequestBytes = 24 * 1024

function result(status: number, headers?: HeadersInit) {
  return Response.json({ ok: status === 200 }, { status, headers })
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method !== 'POST') return result(405, { Allow: 'POST' })
    if (request.headers.get('sec-fetch-site') === 'cross-site') return result(403)
    if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') return result(415)
    if (Number(request.headers.get('content-length')) > maxRequestBytes) return result(413)

    let body: unknown
    try {
      const text = await request.text()
      if (new TextEncoder().encode(text).length > maxRequestBytes) return result(413)
      body = JSON.parse(text)
    } catch {
      return result(400)
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return result(400)

    const fields = body as Record<string, unknown>
    const read = (name: string) => typeof fields[name] === 'string' ? fields[name].trim() : ''
    const name = read('name')
    const email = read('email')
    const message = read('message')
    if (fields.website != null && fields.website !== '') return result(200)
    if (!name || name.length > 120 || !emailPattern.test(email) || email.length > 254 ||
        !message || message.length > 1500) return result(400)

    const apiKey = process.env.BANX_RESEND?.trim()
    const from = process.env.CONTACT_FROM_EMAIL?.trim() || defaultSender
    const inbox = process.env.CONTACT_INBOX?.trim() || businessInbox
    if (!apiKey) {
      console.error('Contact form: BANX_RESEND is missing')
      return result(503)
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from,
          to: [inbox],
          reply_to: email,
          subject: 'Banx Performance training inquiry',
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        }),
        signal: AbortSignal.timeout(10_000),
      })
      if (response.ok) return result(200)
      console.error('Contact form: Resend rejected the email (HTTP %d)', response.status)
    } catch {
      console.error('Contact form: could not reach Resend')
    }
    return result(502)
  },
}
