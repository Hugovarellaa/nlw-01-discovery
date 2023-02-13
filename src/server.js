const express = require("express");
const nunjucks = require("nunjucks");
const db = require("./database/db");

const app = express();
app.use(express.urlencoded({ extended: true }));
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

app.post("/savepoint", (req, res) => {
  const { name, image, address, address2, state, city, itens } = req.body;

  const query = `
     INSERT INTO places (
       name, image, address, address2 ,state, city, items
     )
     values (
       ?, ?, ?, ?, ?, ?, ?
     )
   `;

  const values = [name, image, address, address2, state, city, itens];

  function callback(err) {
    if (err) {
      return res.send("Erro no cadastro");
    }
    console.log("Cadastrado com sucesso");
    console.log(this);
    return res.render("create-point.html", { saved: true });
  }

  db.run(query, values, callback);
});

app.get("/search", (req, res) => {
  const search = req.query.search;
  if (search == "") {
    // pesquisa vazia
    return res.render("search.htm", { total: 0 });
  }

  db.all(
    `
     SELECT * FROM places WHERE city LIKE '%${search}%'
   `,
    function (err, results) {
      if (err) {
        return console.log(err);
      }

      const total = results.length;

      console.log("Aqui estão os registros :", results);
      return res.render("search.htm", { places: results, total });
    }
  );
});

app.listen(3333, console.log("Server listening on port 3333"));
