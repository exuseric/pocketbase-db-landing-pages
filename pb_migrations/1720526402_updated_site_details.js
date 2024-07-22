/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkcsq6r21e1tc6o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "05st07hj",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 40,
      "max": 60,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkcsq6r21e1tc6o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "05st07hj",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 40,
      "max": 65,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
