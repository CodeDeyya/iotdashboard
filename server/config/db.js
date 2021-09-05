const mongoose = require("mongoose");

var MongoURL = "mongodb://localhost:27017/test"; //URL of MongoDB no password is setup

const connectDB = async () => {
  try {
    await mongoose.connect(MongoURL, {
      useNewUrlParser: true,
    });
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
