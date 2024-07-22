/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fgtla8rk1h7z0wx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5imxoirv",
    "name": "cta_text",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ryuqwe1i",
    "name": "cta_url",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fgtla8rk1h7z0wx")

  // remove
  collection.schema.removeField("5imxoirv")

  // remove
  collection.schema.removeField("ryuqwe1i")

  return dao.saveCollection(collection)
})
