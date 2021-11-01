const express = require("express");
const mongoDB = require("mongodb");
const app = express();
app.use(express.json());
const PORT = 8090;
const ObjectId = mongoDB.ObjectId;
const MongoClient = mongoDB.MongoClient;
const mongoURL = "mongodb://localhost:27017";
MongoClient.connect(mongoURL).then(function(db){
    console.log(db);
  })
.catch(function(err){
console.log(err);
  const dbo = db.db("jasonplaceholder");
  const myObjects = [
    { title: "dream", completed: false },
    { title: "print", completed: false },
    { title: "short", completed: true },
    { title: "dont", completed: true },
  ];
// createCollections(dbo,"comments")
//   createDocuoments(dbo,"comments",myObjects)
  getDocuments(dbo, "comments");
//   addTodo(dbo, "comments");
//   deleteTodo(dbo, "comments");
//   updateTodo(dbo, "tcomments");
//   getOneDocById(dbo,"comments");
});
// function createCollections(db,collectionName){
// db.createCollection(collectionName).then(function(db){
// console.log(collectionName);
// })
// .catch(function(err){
// console.log(err); 
// });
// }
// function createDocuoments(db,collectionName,myObjects){
//   db.collection(collectionName).insertMany.then(myObjects, function(db) {
// console.log(myObjects);
//   })
// .catch(function(err){
// console.log(err);
// })
// }
function getDocuments(db, collectionName) {
  app.get("/comments", (req, res) => {
    db.collection(collectionName)
      .find({})
      .toArray.then((todos)=>{
        console.log(todos);
        res.send(todos);
         res.sendStatus(404);
        })
.catch((err)=>{
console.log(err);
}) 
  })
}
// function getOneDocById(db, collectionName) {
//   app.get("/comments/:id", (req, res) => {
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
//   app.post("/comments", (req, res) => {
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
//   app.delete("/comments/:id", (req, res) => {
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
//   app.patch("/comments/:id", (req, res) => {
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
app.listen(PORT, () => {
  console.log(`app is listening ${PORT}`);
});