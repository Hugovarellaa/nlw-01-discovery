const express = require("express");
const nunjucks = require("nunjucks");
const db = require("./database/db");

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
  db.all(
    `
     SELECT * FROM places
   `,
    function (err, results) {
      if (err) {
        return console.log(err);
      }
      console.log("Aqui estão os registros :", results);
      return res.render("search.htm", { places: results });
    }
  );
});

app.listen(3333, console.log("Server listening on port 3333"));
