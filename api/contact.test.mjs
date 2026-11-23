import assert from 'node:assert/strict'
import test from 'node:test'
import contact from './contact.ts'

const inquiry = { name: '  Ana & Jo  ', email: 'ana+banx@example.com', message: 'Speed? #1\n&cc=other@example.com', website: '' }

function request(body, headers = {}) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(body),
  })
}

function setTestEnv(t) {
  const values = {
    BANX_RESEND: 'test-key',
    CONTACT_FROM_EMAIL: 'Banx Performance <contact@example.com>',
    CONTACT_INBOX: 'delivered@resend.dev',
  }
  for (const [key, value] of Object.entries(values)) {
    const previous = process.env[key]
    process.env[key] = value
    t.after(() => {
      if (previous === undefined) delete process.env[key]
      else process.env[key] = previous
    })
  }
}

test('valid contact fields are delivered to the configured inbox, with a safe reply-to', async (t) => {
  setTestEnv(t)
  const deliver = t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.resend.com/emails')
    assert.equal(options.headers.Authorization, 'Bearer test-key')
    assert.deepEqual(JSON.parse(options.body), {
      from: 'Banx Performance <contact@example.com>',
      to: ['delivered@resend.dev'],
      reply_to: 'ana+banx@example.com',
      subject: 'Banx Performance training inquiry',
      text: 'Name: Ana & Jo\nEmail: ana+banx@example.com\n\nSpeed? #1\n&cc=other@example.com',
    })
    return Response.json({ id: 'test-email' })
  })
  const response = await contact.fetch(request({ ...inquiry, to: 'other@example.com' }))
  assert.equal(response.status, 200)
  assert.deepEqual(await response.json(), { ok: true })
  assert.equal(deliver.mock.callCount(), 1)
})

test('malformed, oversized, cross-site, and honeypot requests never send', async (t) => {
  const deliver = t.mock.method(globalThis, 'fetch', async () => { throw new Error('Unexpected delivery') })
  assert.equal((await contact.fetch(new Request('http://localhost/api/contact'))).status, 405)
  assert.equal((await contact.fetch(request(inquiry, { 'Content-Type': 'text/plain' }))).status, 415)
  assert.equal((await contact.fetch(request(inquiry, { 'Sec-Fetch-Site': 'cross-site' }))).status, 403)
  assert.equal((await contact.fetch(request({ ...inquiry, message: 'A'.repeat(25_000) }))).status, 413)
  assert.equal((await contact.fetch(request({ ...inquiry, message: '   ' }))).status, 400)
  assert.equal((await contact.fetch(request({ ...inquiry, email: 'ana@example.com,other@example.com' }))).status, 400)
  assert.equal((await contact.fetch(request({ ...inquiry, website: 'https://example.com' }))).status, 200)
  assert.equal(deliver.mock.callCount(), 0)
})

test('provider failure is not presented as success and does not expose provider details', async (t) => {
  setTestEnv(t)
  t.mock.method(console, 'error', () => {})
  t.mock.method(globalThis, 'fetch', async () => Response.json({ message: 'Provider account details' }, { status: 403 }))
  const response = await contact.fetch(request(inquiry))
  assert.equal(response.status, 502)
  assert.deepEqual(await response.json(), { ok: false })
})
