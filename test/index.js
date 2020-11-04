const { join } = require('path')
const { readFileSync } = require('fs')
const { test } = require('tap')

const schema = require('..')

test('object structure', assert => {
  assert.plan(4)

  assert.equal(typeof schema, 'object')
  assert.equal(typeof schema[1.2], 'object')
  assert.equal(typeof schema[2.0], 'object')
  assert.equal(typeof schema[3.0], 'object')
})

test('same file', assert => {
  assert.plan(1)

  const oas2 = JSON.parse(readFileSync(join(__dirname, '../vendor/schemas/v2.0/schema.json')))

  assert.match(schema[2.0], oas2)
})
