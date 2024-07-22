/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eixmb55wa158u3z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bajkfizi",
    "name": "focus",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "center",
        "top",
        "bottom",
        "left",
        "right"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eixmb55wa158u3z")

  // remove
  collection.schema.removeField("bajkfizi")

  return dao.saveCollection(collection)
})
