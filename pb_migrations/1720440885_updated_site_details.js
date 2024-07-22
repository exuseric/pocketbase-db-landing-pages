/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkcsq6r21e1tc6o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "td32tnrh",
    "name": "links",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 9,
      "values": [
        "home",
        "about us",
        "services",
        "products",
        "contact us",
        "lar",
        "sobre nós",
        "produtos",
        "serviços"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkcsq6r21e1tc6o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "td32tnrh",
    "name": "links",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 9,
      "values": [
        "home",
        "about us",
        "services",
        "projects",
        "contact us",
        "lar",
        "sobre nós",
        "produtos",
        "serviços"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
