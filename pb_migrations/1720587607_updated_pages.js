/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb3dfj8zt8zpsps")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqe2oqio",
    "name": "page_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "products",
        "services",
        "about",
        "contact",
        "package"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb3dfj8zt8zpsps")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqe2oqio",
    "name": "page_type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "products",
        "services",
        "about",
        "contact"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
