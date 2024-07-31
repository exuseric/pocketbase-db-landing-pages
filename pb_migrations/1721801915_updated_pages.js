/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb3dfj8zt8zpsps")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "apothbub",
    "name": "multiple_content",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "g85hd9vu2eadi6x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb3dfj8zt8zpsps")

  // remove
  collection.schema.removeField("apothbub")

  return dao.saveCollection(collection)
})
