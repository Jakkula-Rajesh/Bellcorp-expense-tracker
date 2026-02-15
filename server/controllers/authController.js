const db = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);

    const query =
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.run(query, [name, email, hashedPassword], function (err) {
      if (err) {
        console.log("REGISTER ERROR:", err.message);
        return res.status(400).json({ message: "User already exists" });
      }

      const token = jwt.sign(
        { id: this.lastID },
        "SECRET_KEY",
        { expiresIn: "1d" }
      );

      res.json({ token });
    });
  } catch (error) {
    console.log("REGISTER CRASH:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN
exports.login = (req, res) => {
  try {
    const { email, password } = req.body;

    const query = "SELECT * FROM users WHERE email = ?";

    db.get(query, [email], (err, user) => {
      if (err) {
        return res.status(500).json({ message: "DB error" });
      }

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isValid = bcrypt.compareSync(password, user.password);
      if (!isValid) {
        return res.status(401).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: user.id },
        "SECRET_KEY",
        { expiresIn: "1d" }
      );

      res.json({ token });
    });
  } catch (error) {
    console.log("LOGIN CRASH:", error);
    res.status(500).json({ message: "Server error" });
  }
};
