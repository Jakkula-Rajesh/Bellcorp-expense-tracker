const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const {
  addTransaction,
  getTransactions,
  deleteTransaction,
} = require("../controllers/transactionController");

router.use(authMiddleware);

router.post("/", addTransaction);
router.get("/", getTransactions);
router.delete("/:id", deleteTransaction);

module.exports = router;
