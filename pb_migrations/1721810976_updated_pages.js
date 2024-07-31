/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb3dfj8zt8zpsps")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ahkz33zd",
    "name": "highlight",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb3dfj8zt8zpsps")

  // remove
  collection.schema.removeField("ahkz33zd")

  return dao.saveCollection(collection)
})
