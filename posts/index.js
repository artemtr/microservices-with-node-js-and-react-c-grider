const express = require("express");
const cors = require("cors");
const app = express();

const { randomBytes } = require("crypto");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  console.log(req.body);
  res.send(posts);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  res.status(201).send(posts[id]);
});

app.listen(5000, () => {
  console.log("work");
});
