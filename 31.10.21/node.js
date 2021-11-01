const mongoDB = require("mongodb");
const process = require("process");
const operation = process.argv[2];
const dataBase = process.argv[3];
const age = process.argv[4];
const posts = process.argv[5];
// const title=process.argv[3];
// const author=process.argv[4];
// const addDate=process.argv[5];
// const updateDate=process.argv[6];
const ObjectId = mongoDB.ObjectId;
const MongoClient = mongoDB.MongoClient;
const mongoURL = "mongodb://localhost:27017";
MongoClient.connect(mongoURL, function (err, db) {
  if (err) {
    console.log(err);
  }
  const dbo = db.db("blog");
  const myObj = { name: "anat", age: 98, posts: [] };
  const myObjects = [
    {
      title: "mayan",
      author: "david",
      addDate: "22.10.12",
      updateDate: "25.12.14",
    },
    {
      title: "dora",
      author: "explor",
      addDate: "05.01.09",
      updateDate: "30.11.10",
    },
    {
      title: "shoot",
      author: "zibi",
      addDate: "02.08.14",
      updateDate: "11.09.16",
    },
  ];
  //   const deleteByIdAuthors={_id: new ObjectId("617a63c36dcbcf4aadfd1ee7")};
  //   const deleteByIdPosts={_id: new ObjectId("617a6d876dcbcf4aadfd1eec")};
  //   const updateByIdAuthors={_id: new ObjectId("617e5b56a7fd88d8204aae3d")};
  //   const updateAuthors={$set:{name:"allawacbar"}}
  //   const updateByIdPosts={_id: new ObjectId("617a64f66dcbcf4aadfd1ee8")};
  //   const updatePosts={$set:{author:"ricki rozen bat mavet"}}
  // createCollectionsPosts(dbo,"posts")
  // createDocumentsPosts(dbo,"posts",myObjects)
  //   getDocumentsPosts(dbo, "posts");
  // createDocumentsPosts(dbo,"authors",myObj)
  // createCollections(dbo,"authors")
  // createDocument(dbo,"authors",myObj)
  // getDocuments(dbo, "authors");
  //   deletetDocumentAuthors(dbo,"authors",deleteByIdAuthors)
  //   deleteDocumentByIdPosts(dbo,"posts",deleteByIdPosts)
  //   updateDocumentAuthors(dbo,"authors",updateByIdAuthors,updateAuthors)
  //   updateDocumentByIdPosts(dbo,"posts",updateByIdPosts,updatePosts)
  // const authorsId1= {_id: new ObjectId("617a65146dcbcf4aadfd1ee9")}
  // const PostId1={_id: new ObjectId("617a64f66dcbcf4aadfd1ee8")}
  // const PostId2={  _id: new ObjectId("617a6c536dcbcf4aadfd1eea")}
  // const PostId3={_id: new ObjectId("617a6d876dcbcf4aadfd1eeb")}
  //   addPostToAuthor2(dbo, "617e5b56a7fd88d8204aae3d", "617a65146dcbcf4aadfd1ee9");
  // addManyPosts(dbo,authorsId1,PostId1,PostId2,PostId3);
  // const mySort = { name:1 };
  // alphabeticalOrder(dbo,"authors",mySort)
  // addIdAuthorsToArrayPosts(db,collectionName,updateByIdAuthors,updateAuthors)
  // printPostsUp3(dbo)
  // printAuthorsLess40(dbo)
  // printAuthorsUp40(dbo)
  // printAuthorsBetween20To60(dbo)
  // printAuthorsLimitBetween20To60(dbo)
  // printAuthorsWithoutId(dbo)
  // showAuthorsName(dbo)
  // addDoc(db,"authors",addObj)
  // });
  // function createCollections(db,collectionName){
  //  db.createCollection(collectionName, function(err,coll) {
  //      if(err){
  //     throw(err)
  //      }
  //       console.log(coll);
  //     });
  // }
  //!אני יוצרת פונקציה שמקבלת מסד נתונים אוסף ואובייקט ומשתמשת במתודה להכניס אחד ואני רושמת מבחוץ אובייקט ובעצם מקבלת ארגומנטים שלושה שזה המסד נתונים אוסף ואובייקט ויוצרת את האובייקט
  // function createDocument(db,collectionName,myObj){
  // db.collection(collectionName).insertOne(myObj, function(err, document) {
  //     if(err){
  //         throw(err)
  //          }
  // console.log(document);
  //         })
  // }
  //! ומדפיסה לטרמינל את האובייקיטיםכדי להדפיס את כל האובייקטים אני יוצרת פונקציה שמקבלת את השם של האוסף את מסד הנתונים וקוראת מבחוץ לפונקציה
  // function getDocuments(db, collectionName) {
  //   db.collection(collectionName)
  //     .find({})
  //     .toArray(function (err, res) {
  //       if (err) {
  //         throw err;
  //       }
  //       console.log(res);
  //     });
  // }
  // function createCollectionsPosts(db,collectionName){
  //  db.createCollection(collectionName, function(err,coll) {
  //      if(err){
  //     throw(err)
  //      }
  //       console.log(coll);
  //     });
  // }
  // function createDocumentsPosts(db,collectionName,myObjects){
  // db.collection(collectionName).insertMany(myObjects, function(err, document) {
  //     if(err){
  //         throw(err)
  //          }
  // console.log(document);
  //         })
  // }
  // function getDocumentsPosts(db, collectionName) {
  //   db.collection(collectionName)
  //     .find({})
  //     .toArray(function (err, documents) {
  //       if (err) {
  //         throw err;
  //       }
  //       console.log(documents);
  //     });
  // }
  // function deletetDocumentAuthors(db,collectionName,deleteByIdAuthors){
  //     db.collection(collectionName).deleteOne(deleteByIdAuthors,function(err,document) {
  //       if (err){
  //           throw(err)
  //       }
  //       console.log(document);
  //     })
  //     }
  // function deletetDocumentPosts(db,collectionName,deleteByIdPosts){
  //     db.collection(collectionName).deleteOne(deleteByIdPosts,function(err,document) {
  //       if (err){
  //           throw(err)
  //       }
  //       console.log(document);
  //     })
  //     }
  // function updateDocumentAuthors(db,collectionName,updateByIdAuthors,updateAuthors){
  //     db.collection(collectionName).updateOne(updateByIdAuthors,updateAuthors,function(err,document) {
  //       if (err){
  //           throw(err)
  //       }
  //       console.log(document);
  //     })
  //     }
  // function updateDocumentByIdPosts(db,collectionName,updateByIdPosts,updatePosts){
  //     db.collection(collectionName).updateOne(updateByIdPosts,updatePosts,function(err,document) {
  //       if (err){
  //           throw(err)
  //       }
  //       console.log(document);
  //     })
  //     }
  // function alphabeticalOrder(db,collectionName,mySort){
  //     db.collection(collectionName).find().sort(mySort).toArray(function(err, documents) {
  //         if (err) throw err;
  //         console.log(documents)
  //     })
  // }
  //  function addPostToAuthor2(db,authorId,postId){
  // db.collection("authors").updateOne({_id:ObjectId(authorId)},
  // {$push:{posts:postId}},
  // (err,res)=>{
  // if (err){
  // console.log(err);
  // }
  // console.log(res);
  // })
  // }
  // function addManyPosts(db, authorsId1,PostId1,PostId2,PostId3) {
  //   db.collection("authors").updateOne(authorsId1,{$push:{posts:{$each:[PostId1,PostId2,PostId3]}}},function(err, res) {
  //       if (err) throw err;
  //       console.log(res);
  //     }
  //   );
  // }
  // function printPostsUp3(db){
  // db.collection("authors").find({posts:{$gt:1,$lt:3}}).toArray(function(err, result){
  //     if (err) throw err;
  //     console.log(result);
  // });
  // }
  // function printAuthorsLess40(db){
  // db.collection("authors").find({age:{$lt:40}}).toArray(function(err, result){
  //     if (err) throw err;
  //     console.log(result);
  // });
  // }
  // function printAuthorsUp40(db){
  //   db.collection("authors").find({age:{$gt:40}}).toArray(function(err, result){
  //       if (err) throw err;
  //       console.log(result);
  //   });
  //   }
  //   function printAuthorsBetween20To60(db){
  //     db.collection("authors").find({age:{$gte:20,$lte:60}}).toArray(function(err, result){
  //         if (err) throw err;
  //         console.log(result);
  //     });
  //     }
  // function printAuthorsLimitBetween20To60(db){
  //   db.collection("authors").find({age:{$gte:20,$lte:60}}).limit(3).toArray(function(err, result){
  //       if (err) throw err;
  //       console.log(result);
  //   });
  //   }
  // function printAuthorsWithoutId(db){
  //   db.collection("authors").find({},{projection:{_id:0}}).toArray(function(err, result){
  //       if (err) throw err;
  //       console.log(result);
  //   });
  //   }
  // function showAuthorsName(db){
  //   db.collection("authors").find({},{projection:{_id:0,age:0,posts:0}}).toArray(function(err, result){
  //       if (err) throw err;
  //       console.log(result);
  //   });
  //   }
      // function addDoc(db,collectionName,addObj){
//        switch (operation) {
//       case "add":
// MongoClient.connect(mongoURL,(err,data)=>{
//   if(err){
// console.log(err);
//  }
// const dbo=db.db("blog")
// createDocument(dbo,"authors",myObj)
// })
//   break;
//   case "update":
//     MongoClient.connect(mongoURL,(err,data)=>{
//       if(err){
//     console.log(err);
//      }
//     const dbo=db.db("blog") 
// updateDocumentAuthors(dbo,"authors",updateByIdAuthors,updateAuthors)       
//    break;
//       case "delete":
//         MongoClient.connect(mongoURL,(err,data)=>{
//           if(err){
//         console.log(err);
//          }
//         const dbo=db.db("blog") 
//         deletetDocumentAuthors(dbo,"authors",deleteByIdAuthors)        
//           break;
//       case "logOne":
//           console.log(num1 / num2);
//           break;
//           case "logAll":
//             console.log(num1 / num2);
//             break;
//       default:
//           console.error("error!!!");
//           break;

//   }
// }
});
