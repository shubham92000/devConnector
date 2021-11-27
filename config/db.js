const mongoose = require('mongoose');
const config = require('config');
const { exit } = require('process');

const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('mongo db connected');
  } catch (err) {
    console.log(err.message);
    //exit process with failure
    process.exit(1);
  }
}

module.exports = connectDB;