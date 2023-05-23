const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurantModel');

// GET /api/restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.status(200).json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /api/restaurants
router.post('/restaurants', async (req, res) => {
  try {
    const { restaurantName, email, location, phone } = req.body;

    const restaurant = new Restaurant({
      restaurantName: restaurantName,
      email: email,
      location: location,
      phone: phone,
    });

    await restaurant.save();

    res.status(201).json({ restaurant });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE /api/restaurants/:id
router.delete('/restaurants/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRestaurant = await Restaurant.findByIdAndDelete(id);

    if (deletedRestaurant) {
      res.json({ message: 'Restaurant deleted successfully' });
    } else {
      res.status(404).json({ error: 'Restaurant not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
