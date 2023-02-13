const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

app.use("/public", express.static("public"));

nunjucks.configure("src/views", {
  express: app,
  noCache: true,
});

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/create", (req, res) => {
  res.render("create-point.html");
});

app.get("/search", (req, res) => {
  res.render("search.htm");
});

app.listen(3333, console.log("Server listening on port 3333"));
