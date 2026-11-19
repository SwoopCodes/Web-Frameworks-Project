const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  modifications: { type: [String], required: true }
});


const buildSchema = new mongoose.Schema({
  carTitle: { type: String, required: true },
  owner: { type: String, required: true },
  categories: [categorySchema]
});

mongoose.model('Build', buildSchema);
