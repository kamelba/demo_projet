const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AnnonceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tel: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = AnnonceModel = mongoose.model("annonce", AnnonceSchema);
