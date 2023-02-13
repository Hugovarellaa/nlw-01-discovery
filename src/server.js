const express = require("express");

const app = express();
app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/create", (req, res) => {
  res.sendFile(__dirname + "/views/create-point.html");
});

app.listen(3333, console.log("Server listening on port 3333"));
