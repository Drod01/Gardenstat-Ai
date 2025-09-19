const express = require('express');
const router = express.Router();

// Dummy auth routes placeholder
router.post('/login', (req, res) => {
  res.json({ token: "sample-token" });
});

router.post('/register', (req, res) => {
  res.json({ msg: "User registered" });
});

module.exports = router;
