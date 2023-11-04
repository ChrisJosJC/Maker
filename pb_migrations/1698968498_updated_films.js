/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvzckgnbkhjenj7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "abmmrbvy",
    "name": "duration",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6wfipsxg",
    "name": "starred",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvzckgnbkhjenj7")

  // remove
  collection.schema.removeField("abmmrbvy")

  // remove
  collection.schema.removeField("6wfipsxg")

  return dao.saveCollection(collection)
})
