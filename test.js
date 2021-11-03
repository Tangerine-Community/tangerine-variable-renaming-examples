
const transformer = require('./transformer.js')

const responseZ = {
  _id: "responseZ",
  items: [
    {
      id: 'item_a',
      inputs: [
        {
          name: 'foo',
          value: '1'
        },
        {
          name: 'bar',
          value: '2'
        }
      ]
    },
    {
      id: 'item_b',
      inputs: [
        {
          name: 'zab',
          value: '3'
        }
      ]
    }
  ]
}

const responseX = {
  _id: "responseX",
  items: [
    {
      id: 'item_a',
      inputs: [

        {
          name: 'zab',
          value: '3'
        }
      ]
    },
    {
      id: 'item_b',
      inputs: [
        {
          name: 'foo',
          value: '1'
        },
        {
          name: 'bar',
          value: '2'
        }
      ]
    }
  ]
}

console.log(JSON.stringify(transformer(responseZ), null, 2))
console.log(JSON.stringify(transformer(responseX), null, 2))


