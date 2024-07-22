/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkcsq6r21e1tc6o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aeoeg0yz",
    "name": "seo_description",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohdp5ifa",
    "name": "seo_published_date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0rrdsch5",
    "name": "seo_theme_color",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nru4nac",
    "name": "seo_keywords",
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
  const collection = dao.findCollectionByNameOrId("tkcsq6r21e1tc6o")

  // remove
  collection.schema.removeField("aeoeg0yz")

  // remove
  collection.schema.removeField("ohdp5ifa")

  // remove
  collection.schema.removeField("0rrdsch5")

  // remove
  collection.schema.removeField("7nru4nac")

  return dao.saveCollection(collection)
})
