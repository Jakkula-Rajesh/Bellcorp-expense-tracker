const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.join(__dirname, "../database/expense.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.log("DB CONNECTION ERROR:", err.message);
  } else {
    console.log("SQLite DB connected");
  }
});

// users table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
  )
`);

module.exports = db;
