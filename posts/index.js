const express = require("express");
const app = express();

const { randomBytes } = require("crypto");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const post = {};

app.get("/posts", (req, res) => {
  console.log(req.body);
  res.send(post);
});

app.post("/posts", (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  post[id] = {
    id,
    title,
  };
  res.status(201).send(post[id]);
});

app.listen(5000, () => {
  console.log("work");
});
