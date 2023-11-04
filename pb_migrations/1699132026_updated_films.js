/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvzckgnbkhjenj7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "so9gygmy",
    "name": "categories",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 7,
      "values": [
        "Sales",
        "Human Resources",
        "Drawing",
        "Big Data",
        "Design",
        "Marketing",
        "Astronomy"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvzckgnbkhjenj7")

  // remove
  collection.schema.removeField("so9gygmy")

  return dao.saveCollection(collection)
})
