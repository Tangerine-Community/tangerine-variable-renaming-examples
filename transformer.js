
const variableMapByItemContext = {
  item_a: {
    foo: 'foo_item_a'
  },
  item_b: {
    foo: 'foobar_b'
  }
}

// List of variable names to append the item ID.
const variableMapToAddItemContext = [
  'bar'
]

const itemIdMap = {
  item_a: 'a',
  item_b: 'cool_b'
}

const variableMap = {
  zab: 'zebra'
}

module.exports = function transformer(response) {
  response.items = response.items.map(item => {
    item.inputs = item.inputs.map(input => {
      // Use variableMap.
      if (variableMap[input.name]) {
        input.name = variableMap[input.name]
      }
      // Use variableMapByItemContext.
      if (variableMapByItemContext[item.id] && variableMapByItemContext[item.id][input.name]) {
        input.name = variableMapByItemContext[item.id][input.name] 
      }
      // Use variableMapToAddItemContext and itemIdMap.
      if (variableMapToAddItemContext.includes(input.name)) {
        input.name = `${input.name}_${itemIdMap[item.id]}`
      }
      return input
    })
    return item
  })
  return response
}
