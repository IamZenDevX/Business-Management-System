const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  amount: {
    type: Number,
  },
  paid: {
    type: Number,
  },
  due: {
    type: Number,
  },
  returnAmount: {
    type: Number,
  },
  profit: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
