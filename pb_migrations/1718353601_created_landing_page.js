/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4qftjkhpa8vjcut",
    "created": "2024-06-14 08:26:41.076Z",
    "updated": "2024-06-14 08:26:41.076Z",
    "name": "landing_page",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "alvfzp7f",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
  const collection = dao.findCollectionByNameOrId("4qftjkhpa8vjcut");

  return dao.deleteCollection(collection);
})
