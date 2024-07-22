/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fgtla8rk1h7z0wx")

  // remove
  collection.schema.removeField("lboly9oh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pdzamcch",
    "name": "image",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "eixmb55wa158u3z",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fgtla8rk1h7z0wx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lboly9oh",
    "name": "image",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "eixmb55wa158u3z",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("pdzamcch")

  return dao.saveCollection(collection)
})
