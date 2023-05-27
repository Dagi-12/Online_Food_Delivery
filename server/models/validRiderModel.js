const mongoose = require("mongoose");

const validRiderSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  vehicleType: String,
  AboutYourSelf: String,
});

const ValidRider = mongoose.model("ValidRider", validRiderSchema);

module.exports = ValidRider;
