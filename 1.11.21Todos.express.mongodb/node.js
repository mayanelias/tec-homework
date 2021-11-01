// const express = require("express");
// const mongoDB = require("mongodb");
// const app = express();
// app.use(express.json());
// const PORT = 8080;
// const ObjectId = mongoDB.ObjectId;
// const MongoClient = mongoDB.MongoClient;
// const mongoURL = "mongodb://localhost:27017";
// MongoClient.connect(mongoURL, function (err, db) {
//   if (err) {
//     console.log(err);
//   }
//   const dbo = db.db("jasonplaceholder");
//   const myObjects = [
//     { title: "do homework", completed: false },
//     { title: "clean", completed: false },
//     { title: "sleep", completed: true },
//     { title: "drink", completed: true },
//   ];
//   // createCollections(dbo,"todos")
//   // createDocuoments(dbo,"todos",myObjects)
//   getDocuments(dbo, "todos");
//   addTodo(dbo, "todos");
//   deleteTodo(dbo, "todos");
//   updateTodo(dbo, "todos");
//   getOneDocById(dbo,"todos");
// });
// function createCollections(db,collectionName){
// db.createCollection(collectionName, function(err, res) {
// if (err) throw err;
// console.log(res);
// })
// }
// // function createDocuoments(db,collectionName,myObjects){
// //   db.collection(collectionName).insertMany(myObjects, function(err, documents) {
// //       if(err){
// //           throw(err)
// //            }
// //   console.log(documents);
// //           })
// //   }
// function getDocuments(db, collectionName) {
//   app.get("/todos", (req, res) => {
//     db.collection(collectionName)
//       .find({})
//       .toArray(function (err, todos) {
//         if (err) {
//           res.sendStatus(404);
//         }
//         res.send(todos);
//       });
//   });
// }
// function getOneDocById(db, collectionName) {
//   app.get("/todos/:id", (req, res) => {
//     const params = ObjectId(req.params.id);
//     const id = { _id: params };      
//     db.collection(collectionName)
//       .findOne(id,
//       function (err, todos) {
//         if (err) {
//           res.sendStatus(404);
//         }
//         res.send(todos);
//       });
//   });
// }
// function addTodo(db, collectionName) {
//   app.post("/todos", (req, res) => {
//     const title = req.body.title;
//     const completed = req.body.completed;

//     const todo = {
//       title: title,
//       completed: completed,
//     };
//     // res.sendStatus(201);
//     db.collection(collectionName).insertOne(todo, function (err, todo) {
//       if (err) {
//         // res.sendStatus(404)
//       }
//       res.send(todo);
//     });
//     // res.sendStatus(400);
//   });
// }
// function deleteTodo(db, collectionName) {
//   app.delete("/todos/:id", (req, res) => {
//     const params = ObjectId(req.params.id);
//     const id = { _id: params };
//     // console.log(id);
//     // res.sendStatus(404);
//     // res.sendStatus(200);
//     db.collection(collectionName).deleteOne(id, function (err, todo) {
//       if (err) {
//         throw err;
//       }
//       res.send(todo);
//     });
//   });
// }
// function updateTodo(db, collectionName) {
//   app.patch("/todos/:id", (req, res) => {
//     const params = ObjectId(req.params.id);
//     const id = { _id: params };  
//     const title = req.body.title;
//     const completed = req.body.completed;
//     const updateTodo = {
//       title,
//       completed,
//     };
//     db.collection(collectionName).updateOne(id,{$set:updateTodo},function (err,todo) {
//       if (err) {
//         throw err;
//       }
//       res.send(todo);
//     });
//   });
// }
// app.listen(PORT, () => {
//   console.log(`app is listening ${PORT}`);
// });
