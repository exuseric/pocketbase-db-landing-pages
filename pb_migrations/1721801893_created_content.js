/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g85hd9vu2eadi6x",
    "created": "2024-07-24 06:18:13.258Z",
    "updated": "2024-07-24 06:18:13.258Z",
    "name": "content",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3bnrq801",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "eixmb55wa158u3z",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "pdhjvuom",
        "name": "content",
        "type": "editor",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("g85hd9vu2eadi6x");

  return dao.deleteCollection(collection);
})
