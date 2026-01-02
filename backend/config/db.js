const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI
    //   , {
    //   ssl: true,
    //   tlsAllowInvalidCertificates: false,
    // }
  );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.error(`Error: ${err.message}`.red);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
