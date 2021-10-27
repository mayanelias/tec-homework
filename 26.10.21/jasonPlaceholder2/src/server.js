const express = require("express");
const app = express();
const PORT = 8090;
const fs=require("fs");
const fileName="comments.json";
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`<h1> Hi i am here</h1>`);
});
app.get("/comments", (req, res) => {
  res.send(fs.readFileSync(fileName,"utf-8"));
});
let freeId = 0;
app.post("/comments", (req, res) => {
  const name = req.body.name;
  const body = req.body.body;
  const email = req.body.email;
  if (name) {
    const comments =JSON.parse(fs.readFileSync(fileName,"utf-8"));
  // console.log(name);
    const newComment = {
      name: name,
      email: email,
      id: freeId,
      body: body
    };
    comments.push(newComment);
    freeId++;
    fs.writeFileSync(fileName, JSON.stringify(comments));  
    return res.sendStatus(201);
  }
  res.sendStatus(400);
});
app.get("/comments/:id", (req, res) => {
  const comments =JSON.parse(fs.readFileSync(fileName,"utf-8"));
  const params = req.params; 
  const id = req.params.id;
  console.log(params);
  const commentsFound = comments.find((comment) => comment.id == id);
  if (commentsFound) {
    return res.send(commentsFound);
  }
  res.sendStatus(404);
});
app.delete("/comments/:id", (req, res) => {
  const comments =JSON.parse(fs.readFileSync(fileName,"utf-8"));
  const id = req.params.id;
  const index = comments.findIndex((comment) => comment.id == id);
  if (index == -1) {
    return res.sendStatus(404);
  }
  comments.splice(index, 1);
  fs.writeFileSync(fileName, JSON.stringify(comments)); 
  res.sendStatus(200);
});
app.patch("/comments/:id", (req, res) => {
  const id = req.params.id;
  const foundComment = comments.find((comment) => {
    return comment.id == id;nnnnnnnnnnnnn
  });
  if (foundComment == undefined) {
    return res.sendStatus(404);
  }
  const email = req.body.email;
  const addressSign = "@";
  const firstIndex = email.indexOf(addressSign);
  const lastIndex = email.lastIndexOf(addressSign);
  if (firstIndex != 0 && firstIndex == lastIndex && firstIndex != -1) {
    const name = req.body.name;
    const body = req.body.body;
    if (name && body) {
      foundComment.name = name;
      foundComment.email = email;
      foundComment.body = body;
      fs.writeFileSync(fileName, JSON.stringify(comments));
      return res.sendStatus(200);
    }
    res.sendStatus(400);
  } else {
    res.sendStatus(400);
  }
});
app.listen(PORT, () => console.log(`app is listening on ${PORT}`));b