const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurantModel');

// POST /api/restaurants
router.post('/restaurants', async (req, res) => {
  try {
    const { restaurantName, email, location, phone } = req.body;

    // create a new Restaurant document using the provided Mongoose schema
    const restaurant = new Restaurant({
      restaurantName: restaurantName,
      email: email,
      location: location,
      phone: phone,
    });

    // save the new Restaurant document to the database
    await restaurant.save();

    res.status(201).json({ restaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
