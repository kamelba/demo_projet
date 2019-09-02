const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const AnnonceSchema = new Schema({
  titre: {
    type: String,
    required: true
  },
  catégorie: {
    type: String,
    required: true
  },
  sousCatégorie: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  prix: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }

});

module.exports = AnnonceModel = mongoose.model("annonce", AnnonceSchema);
