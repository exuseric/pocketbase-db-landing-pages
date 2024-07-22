/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6egv9rkm0cjmz1p");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "6egv9rkm0cjmz1p",
    "created": "2024-06-14 08:48:20.455Z",
    "updated": "2024-06-14 08:48:20.455Z",
    "name": "SEOHead",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cv0s0dmg",
        "name": "Title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 40,
          "max": 60,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "4ak3uwca",
        "name": "Description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 70,
          "max": 155,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "sx5iiucr",
        "name": "ThemeColor",
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
        "id": "9ecee3wh",
        "name": "Keywords",
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
        "id": "vqdy3lfn",
        "name": "PublishedDate",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "xcslw6ps",
        "name": "SiteUrl",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
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
