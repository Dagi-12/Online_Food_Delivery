const express = require('express');
const router = express.Router();
const ContactUS = require('../models/contactUsModel');

// POST /api/contactus
router.post('/contactUs', async (req, res) => {
  try {
    const { email, feedback} = req.body;
console.log(req.body)
    // post a new feddback document using the provided Mongoose schema
    const contactUs = new ContactUS({
      email:email,
      feedback:feedback,
    
    });

   
    // save the new info document to the database
    await contactUs.save();

    res.status(201).json({ contactUs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
