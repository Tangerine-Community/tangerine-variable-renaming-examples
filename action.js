const transformer = require('./transformer.js')

module.exports = async function(change, db) {
  try {
    doc = await db.get(change.id)
  } catch (err) {
    if (err.error == 'not_found') {
      return 0
    } else {
      console.log(`Error getting doc ${doc._id}: ${err.error}`)
      return -1
    }
  }
  if (doc.type === 'response' && (!doc.schema || doc.schema < 1)) {
    const transformedDoc = transformer(doc)
    transformedDoc.schema = 1
    await db.put(transformedDoc)
  }
}
