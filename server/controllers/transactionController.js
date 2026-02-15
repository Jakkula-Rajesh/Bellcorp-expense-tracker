const db = require("../models/transactionModel");

// Add transaction
exports.addTransaction = (req, res) => {
  const { title, amount, category, date, notes } = req.body;
  const userId = req.userId;

  const query = `
    INSERT INTO transactions (userId, title, amount, category, date, notes)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.run(query, [userId, title, amount, category, date, notes], function () {
    res.json({ message: "Transaction added" });
  });
};

// Get all transactions
exports.getTransactions = (req, res) => {
  const query = "SELECT * FROM transactions WHERE userId = ? ORDER BY id DESC";

  db.all(query, [req.userId], (err, rows) => {
    res.json(rows);
  });
};

// Delete transaction
exports.deleteTransaction = (req, res) => {
  const query = "DELETE FROM transactions WHERE id = ?";

  db.run(query, [req.params.id], () => {
    res.json({ message: "Transaction deleted" });
  });
};
