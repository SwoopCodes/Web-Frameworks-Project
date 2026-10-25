const mongoose = require('mongoose');

// One category on a build card, e.g. Exterior,
// with its own list of modifications
const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  modifications: { type: [String], required: true }
});

// One car build (one card on the Browse Builds page).
// A build can have several categories.
const buildSchema = new mongoose.Schema({
  carTitle: { type: String, required: true },
  owner: { type: String, required: true },
  categories: [categorySchema]
});

mongoose.model('Build', buildSchema);
