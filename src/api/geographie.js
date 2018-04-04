/*jshint esversion : 6 */

// ./src/api/geographie.js

module.exports = (expressApp) => {
  const mysql = require('mysql');

  const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '@mysql',
    database : 'geographie_fr'
  });

  connection.connect();

  const geographie = (app) => {

    app.get("/departement", (req, res) => {
      const q = "SELECT * from departement ORDER BY departement_id";
      connection.query(q, (error, results, fields) => {
        if (error) throw error;
        else res.status(200).send(results);
      });
    });

    app.get("/departement/name/:name", (req, res) => {
      const q = `SELECT * from departement WHERE departement_nom = '${req.params.name}'`;
      connection.query(q, (error, results, fields) => {
        if (error) throw error;
        else res.status(200).send(results);
      });
    });

    app.get("/departement/code/:code", (req, res) => {
      const q = `SELECT * from departement WHERE departement_code = '${req.params.code}'`;
      connection.query(q, (error, results, fields) => {
        if (error) throw error;
        else res.status(200).send(results);
      });
    });

  };

  return geographie(expressApp);
};
