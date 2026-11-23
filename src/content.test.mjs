import assert from 'node:assert/strict'
import test from 'node:test'
import { posts, programs } from './content.ts'

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
