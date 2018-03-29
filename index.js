/* jshint esversion : 6 */
const express = require("express");
const app = express();
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '@mysql',
  database : 'geographie_fr'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  console.log('The solution is: ', results[0].solution);
});

app.get("/", (req, res) => {
  res.send("<p>hello from node server !</p>");
});

app.get("/departement", (req, res) => {
  const q = "SELECT * from departement ORDER BY departement_id";
  connection.query(q, (error, results, fields) => {
    if (error) throw error;
    else res.send(results);
  });
});

app.listen(3001);
