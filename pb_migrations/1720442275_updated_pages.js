/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb3dfj8zt8zpsps")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s0a9owzs",
    "name": "card_grid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fgtla8rk1h7z0wx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xb3dfj8zt8zpsps")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s0a9owzs",
    "name": "card_grid",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "fgtla8rk1h7z0wx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
