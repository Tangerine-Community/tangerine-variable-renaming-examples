const transformer = require('./transformer.js')

function test(name, pass) {
  if (pass) {
    console.log(`PASS: ${name}`)
  } else {
    console.error(`FAIL: ${name}`)
  }
}

const responseZ = require('./stubs/response-z.json')
const transformedResponseZ = transformer(responseZ)
test('Variable map should rename zab to zebra in responseZ', transformedResponseZ.items[1].inputs[0].name === 'zebra') 

const responseX = require('./stubs/response-x.json') 
const transformedResponseX = transformer(responseX)
test('Variable map should rename zab to zebra in responseX', transformedResponseX.items[0].inputs[0].name === 'zebra') 