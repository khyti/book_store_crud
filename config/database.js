require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;