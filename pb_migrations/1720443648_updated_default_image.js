/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eixmb55wa158u3z")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "672ihi9r",
    "name": "alt",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("eixmb55wa158u3z")

  // remove
  collection.schema.removeField("672ihi9r")

  return dao.saveCollection(collection)
})
