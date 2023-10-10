const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected");
  } catch (error) {
    console.log("unable to connect" + error.message);
  }
};

console.log("Before connecting to MongoDB");
connectDB();
console.log("After connecting to MongoDB");

module.exports = connectDB;
