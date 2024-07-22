/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qftjkhpa8vjcut")

  // remove
  collection.schema.removeField("u7qdgnjh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1ke1t4e8",
    "name": "Country",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "ke",
        "cbv",
        "moc"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qftjkhpa8vjcut")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u7qdgnjh",
    "name": "country",
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

  // remove
  collection.schema.removeField("1ke1t4e8")

  return dao.saveCollection(collection)
})
