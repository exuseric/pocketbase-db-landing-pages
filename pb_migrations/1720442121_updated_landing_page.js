/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qftjkhpa8vjcut")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wf1lgzpg",
    "name": "pages",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "xb3dfj8zt8zpsps",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qftjkhpa8vjcut")

  // remove
  collection.schema.removeField("wf1lgzpg")

  return dao.saveCollection(collection)
})
