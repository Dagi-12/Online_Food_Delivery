const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  restaurantName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
   email: {
    type: String,
    required: true,
    unique: true,
  },
    phone: {
    type: String,
    required: true,
  },
 
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
