/* jshint esversion : 6 */

// ./src/api/api.js

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

// permettre les appels AJAX cross-origins (CORS...)
app.use(cors());

const geoAPI = require("./geographie")(app);
const fileAPI = require("./file")(app);

app.get("/", (req, res) => {
  res.send("hello node");
});

app.listen(port);
