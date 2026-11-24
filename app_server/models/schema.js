const mongoose = require('mongoose');

function hasAtLeastOneItem(list) {
  return list.length >= 1;
}

const buildSchema = new mongoose.Schema({
  carTitle: {
    type: String,
    required: [true, 'Car title is required'],
    minlength: [3, 'Car title must be at least 3 characters']
  },
  owner: {
    type: String,
    required: [true, 'Owner is required']
  },
  imageUrl: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Exterior', 'Engine', 'Interior', 'Other'],
      message: 'Category must be Exterior, Engine, Interior or Other'
    }
  },
  modifications: {
    type: [String],
    validate: {
      validator: hasAtLeastOneItem,
      message: 'At least one modification is required'
    }
  },
  createdOn: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Build', buildSchema);
