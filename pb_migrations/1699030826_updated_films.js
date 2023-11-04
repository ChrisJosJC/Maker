/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvzckgnbkhjenj7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "smeuxets",
    "name": "description",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("nvzckgnbkhjenj7")

  // remove
  collection.schema.removeField("smeuxets")

  return dao.saveCollection(collection)
})
