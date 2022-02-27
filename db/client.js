const sqlite3 = require('sqlite3').verbose();
// if the specified database exists, connect to it else create the database
const db = new sqlite3.Database('./restaurants.sqlite');

module.exports = db;
