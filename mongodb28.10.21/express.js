const express=require("express");
const app=express();
const PORT=8080;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/blog";
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   let blog = db.db("blog");
//   blog.collection("authors").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     let blog = db.db("blog");
//     blog.collection("posts").find({}).toArray(function(err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
//   });
// app.listen(PORT,()=>{
// console.log(`app is listening ${PORT}`);
// });
function getBlog(collection){
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        let blog = db.db("blog");
        blog.collection(collection).find({}).toArray(function(err, result) {
          if (err) throw err;
          console.log(result);
          db.close();
        });
      });
}
getBlog("authors")
app.listen(PORT,()=>{
    console.log(`app is listening ${PORT}`);
    });