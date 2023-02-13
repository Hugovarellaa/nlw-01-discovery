const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

module.exports = db;

// db.serialize(() => {
//   // Create db
//   db.run(`
//       CREATE TABLE IF NOT EXISTS places (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL,
//         image TEXT NOT NULL,
//         address TEXT NOT NULL,
//         address2 TEXT NOT NULL,
//         state TEXT NOT NULL,
//         city TEXT NOT NULL,
//         items TEXT NOT NULL
//       );
//     `);

//   const query = `
//     INSERT INTO places (
//       name, image, address, address2 ,state, city, items
//     )
//     values (
//       ?, ?, ?, ?, ?, ?, ?
//     )
//   `;

//   const values = [
//     "Papersider",
//     "https://images.unsplash.com/photo-1517319725296-466c84bd7d54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//     "Guilherme Gemballa, Jardim América",
//     "Nº 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papéis e Papelão",
//   ];

//   function callback(err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Cadastrado com sucesso");
//   }

//   // Post db
//   // db.run(query, values, callback);

//   // Get db
//   db.all(
//     `
//     SELECT * FROM places
//   `,
//     function (err, results) {
//       if (err) {
//         return console.log(err);
//       }
//       console.log("Aqui estão os registros :", results);
//     }
//   );

//   // Delete registro em db
//   // db.run(`DELETE FROM places WHERE id = ?`, [1], function (err, results) {
//   //   if (err) {
//   //     return console.log(err);
//   //   }
//   //   console.log("Registro deletado com sucesso");
//   // });
// });
