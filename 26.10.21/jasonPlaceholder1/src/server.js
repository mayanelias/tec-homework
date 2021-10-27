const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.json());
const comments =[];
app.get("/", (req, res) => {
  res.send(`<h1> Hi i am here</h1>`);
});
app.get("/comments", (req, res) => {
  res.send(comments);
});
let freeId = 0;
app.post("/comments", (req, res) => {
  const name = req.body.name;
  const body = req.body.body;
  const email = req.body.email;
  // console.log(name);
  if (name) {
    const newComment = {
      name: name,
      email: email,
      id: freeId,
      body: body,
    };
    comments.push(newComment);
    freeId++; 
    return res.sendStatus(201);
  }
  res.sendStatus(400);
});
app.get("/comments/:id", (req, res) => {
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
  const id = req.params.id;
  const index = comments.findIndex((comment) => comment.id == id);
  if (index == -1) {
    return res.sendStatus(404);
  }
  comments.splice(index, 1);
  res.sendStatus(200);
});
app.listen(PORT, () => console.log(`app is listening on ${PORT}`));