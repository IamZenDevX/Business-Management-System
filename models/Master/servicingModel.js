const mongoose = require("mongoose");

const servicingSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  serviceCharge: {
    type: Number,
  },
  status: {
    type: String,
  },
  deliveryDate: {
    type: Date,
    default: Date.now,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("servicing", servicingSchema);
