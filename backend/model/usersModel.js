const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  identifiant: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  }

  

});

module.exports = userModel = mongoose.model("user", userSchema);
