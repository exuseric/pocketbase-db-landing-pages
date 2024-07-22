/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("x8ldwdfw14gxjl5");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "x8ldwdfw14gxjl5",
    "created": "2024-06-14 08:42:57.429Z",
    "updated": "2024-06-14 08:42:57.429Z",
    "name": "site_details",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3jtqyboo",
        "name": "title",
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
        "id": "e49oi4wu",
        "name": "url",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
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
})
