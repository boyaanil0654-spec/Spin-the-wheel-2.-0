const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/login', (req, res) => {
  // Simple auth logic
  const token = jwt.sign({ user: req.body.username }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
