/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvzckgnbkhjenj7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "so9gygmy",
    "name": "category",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Sales",
        "Human Resources",
        "Drawing",
        "Big Data",
        "Design",
        "Marketing",
        "Others"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvzckgnbkhjenj7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "so9gygmy",
    "name": "categories",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Sales",
        "Human Resources",
        "Drawing",
        "Big Data",
        "Design",
        "Marketing",
        "Others"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
