const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect("mongodb://localhost:27017/HacksDb",{useNewUrlParser:true},()=>{
    console.log("Connected to Database");
});
// const db = mongoose.connection;

// db.on("connected",()=>{
//         console.log("MongoDb connected successfully");
// });

// db.on("error",()=>{
//     console.log("MongoDb Connection Failed");
// });