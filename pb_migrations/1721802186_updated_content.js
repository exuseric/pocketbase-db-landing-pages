/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g85hd9vu2eadi6x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nkzgxnga",
    "name": "iconify_icon_name",
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
  const collection = dao.findCollectionByNameOrId("g85hd9vu2eadi6x")

  // remove
  collection.schema.removeField("nkzgxnga")

  return dao.saveCollection(collection)
})
