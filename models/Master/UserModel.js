const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    maxLength: 30,
  },
  createdat: {
    type: Date,
  },
});

module.exports = mongoose.model("User", UserSchema);
