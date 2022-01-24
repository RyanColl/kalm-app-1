const mysql = require("mysql2");

const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = {
  host: "us-cdbr-east-04.cleardb.com",
  user: "b92dae7f98e458",
  password: "e887f763",
  database: "heroku_7ee9b2b9094dd52",
  multipleStatements: false,
  namedPlaceholders: true,
};

const dbConfigLocal = {
  host: "localhost",
  user: "read_write_all",
  password: "password",
  database: "",
  multipleStatements: false,
  namedPlaceholders: true,
};

if (is_heroku) {
  var database = mysql.createPool(dbConfigHeroku);
} else {
  var database = mysql.createPool(dbConfigHeroku);
}

module.exports = database;
