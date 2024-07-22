/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qftjkhpa8vjcut")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aww68uvb",
    "name": "hero",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "eo8wjjrz7ony20g",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qftjkhpa8vjcut")

  // remove
  collection.schema.removeField("aww68uvb")

  return dao.saveCollection(collection)
})
