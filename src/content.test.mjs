import assert from 'node:assert/strict'
import test from 'node:test'
import { buildContactDraft, contactEmail, posts, programs } from './content.ts'

test('a contact draft retains special characters without adding URL fields', () => {
  const draft = new URL(buildContactDraft('  Ana & Jo  ', 'ana+banx@example.com', 'Speed? #1\n&cc=other@example.com'))
  assert.equal(draft.protocol, 'mailto:')
  assert.equal(draft.pathname, contactEmail)
  assert.deepEqual([...draft.searchParams], [
    ['subject', 'Banx Performance training inquiry'],
    ['body', 'Name: Ana & Jo\nEmail: ana+banx@example.com\n\nSpeed? #1\n&cc=other@example.com'],
  ])
})

test('the original three programs lead to separate Trainerize checkouts', () => {
  assert.deepEqual(programs.map(({ name }) => name), ['Greenhorn', 'Bolt', 'Composite'])
  const plans = programs.map(({ url }) => {
    const checkout = new URL(url)
    assert.equal(checkout.origin, 'https://www.trainerize.me')
    assert.equal(checkout.searchParams.get('mode'), 'checkout')
    const plan = checkout.searchParams.get('planGUID')
    assert.match(plan, /^[a-f0-9]{32}$/)
    return plan
  })
  assert.equal(new Set(plans).size, 3)
})

test('the journal retains the three original article paths', () => {
  assert.deepEqual(posts.map(({ slug }) => slug), [
    'elastic-performance', 'enhancing-vertical-jump-performance', 'why-should-youth-athletes-lift-weights',
  ])
})
