// const express = require('express');
// const router = express.Router();
// const Products = require('../models/productsModel');

// // Create a new product
// router.post('/products', async (req, res) => {
//   const { name, adjective, description, price, category, imageUrl } = req.body;

//   try {
//     const product = new Products({
//       name,
//       adjective,
//       description,
//       price,
//       category: { name: category.name },
//       imageUrl,
//     });

//     const newProduct = await product.save();
//     res.status(201).json(newProduct);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// module.exports = router;
