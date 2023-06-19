const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://coded:coded@cluster0.tsyplwp.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
