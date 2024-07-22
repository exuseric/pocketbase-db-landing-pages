/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eo8wjjrz7ony20g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5shyvkbx",
    "name": "version",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "horizontal stylised",
        "vertical stylised",
        "horizontal",
        "vertical"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eo8wjjrz7ony20g")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5shyvkbx",
    "name": "version",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "1",
        "2",
        "3",
        "4"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
