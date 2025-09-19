const express = require('express');
const Plant = require('../models/Plant');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

// Add plant
router.post('/', auth, async (req, res) => {
  try {
    const newPlant = new Plant({ ...req.body, user: req.user.id });
    const plant = await newPlant.save();
    res.json(plant);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Get user plants
router.get('/', auth, async (req, res) => {
  try {
    const plants = await Plant.find({ user: req.user.id });
    res.json(plants);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

module.exports = router;
