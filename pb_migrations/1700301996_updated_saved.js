/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvc80nafziutn3p")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nvc80nafziutn3p")

  collection.listRule = "user.id=@request.auth.id"
  collection.viewRule = "user.id=@request.auth.id"
  collection.createRule = "user.id=@request.auth.id"

  return dao.saveCollection(collection)
})
