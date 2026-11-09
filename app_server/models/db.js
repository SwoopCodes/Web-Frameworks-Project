const { MongoClient } = require('mongodb');

// Load variables from a local .env file if dotenv is available. dotenv is
// optional: in production the variables can be set in the real environment
// instead. (.env is gitignored so credentials never get committed.)
try { require('dotenv').config(); } catch (_) { /* dotenv not installed; rely on process.env */ }

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error(
    'MONGODB_URI environment variable must be set (MongoDB connection string, including credentials).'
  );
}

const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

async function disconnectFromMongoDB() {
  await client.close();
}

module.exports = { connectToMongoDB, disconnectFromMongoDB };
require('./schema.js');