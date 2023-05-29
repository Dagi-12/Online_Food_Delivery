const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

// Create a new order
router.post('/orders', async (req, res) => {
  try {
    const { cart } = req.body;
    const order = new Order({ cart });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});
// Delete all orders
router.delete('/orders', async (req, res) => {
  try {
    await Order.deleteMany();
    res.json({ message: 'All orders deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred' });
  }
});
module.exports = router;
