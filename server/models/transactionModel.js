const db = require("./userModel");

db.run(`
  CREATE TABLE IF NOT EXISTS transactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userId INTEGER,
    title TEXT,
    amount REAL,
    category TEXT,
    date TEXT,
    notes TEXT
  )
`);

module.exports = db;
