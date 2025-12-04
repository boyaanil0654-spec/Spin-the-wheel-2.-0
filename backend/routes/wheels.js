const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  const wheels = JSON.parse(fs.readFileSync('./data/wheels.json'));
  res.json(wheels);
});

router.post('/', (req, res) => {
  const wheels = JSON.parse(fs.readFileSync('./data/wheels.json'));
  wheels.push(req.body);
  fs.writeFileSync('./data/wheels.json', JSON.stringify(wheels));
  res.status(201).json({ message: 'Wheel saved' });
});

// Add PUT/DELETE for update/remove, import/export endpoints
module.exports = router;
