const mongoose = require('mongoose');

require('dotenv').config();

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    'MONGODB_URI environment variable must be set (MongoDB connection string, including credentials).'
  );
}

async function connectToMongoDB() {
  try {
    await mongoose.connect(uri);
    console.log("You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error.message);
  }
}

async function disconnectFromMongoDB() {
  await mongoose.disconnect();
}

module.exports = { connectToMongoDB, disconnectFromMongoDB };
require('./schema.js');
require('./users.js');
