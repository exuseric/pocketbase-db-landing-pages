/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkcsq6r21e1tc6o")

  collection.name = "site_details"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkcsq6r21e1tc6o")

  collection.name = "site_detail"

  return dao.saveCollection(collection)
})
