const mongoose = require('mongoose');

const riderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  vehicleType: { type: String, enum: ['car', 'bicycle', 'motorcycle'], required: true },
  AboutYourSelf: { type: String, required: true },
});

const Rider = mongoose.model('Rider', riderSchema);

module.exports = Rider;
