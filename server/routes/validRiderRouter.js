const express = require('express');
const router = express.Router();
const ValidRider = require('../models/validRiderModel');

// GET /api/validriders
router.get('/validriders', async (req, res) => {
  try {
    const validRiders = await ValidRider.find({});
    res.status(200).json(validRiders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST /api/validriders
router.post('/validriders', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, vehicleType, AboutYourSelf } = req.body;

    const existingRider = await ValidRider.findOne({ email: email });

    if (existingRider) {
      // Rider already exists in the collection
      res.status(409).json({ error: 'Rider already exists' });
    } else {
      // Create a new rider
      const validRider = new ValidRider({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        vehicleType: vehicleType,
        AboutYourSelf: AboutYourSelf,
      });

      await validRider.save();

      res.status(201).json({ validRider });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});


// DELETE /api/validriders/:id
router.delete('/validriders/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRider = await ValidRider.findByIdAndDelete(id);

    if (deletedRider) {
      res.json({ message: 'Rider deleted successfully' });
    } else {
      res.status(404).json({ error: 'Rider not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
