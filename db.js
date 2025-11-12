// const mongoose = require('mongoose');
// require("dotenv").config(); 
// const express = require('express');
// const app = express();
// //////////////////////////////////////
// // let mongoUrl='mongodb://localhost:27017/mydatabase';
// let mongoUrl = process.env.MONGODB_URL;
// // let mongoUrl = "mongodb+srv://helloworld:hellobye12345@cluster0.snl9ffz.mongodb.net/";
//  mongoose.connect(mongoUrl);
// // mongoose.connect(mongoUrl)
//   // .then(() => console.log("✅ connected to mongoDB"))
//   // .catch(err => console.error("❌ connection error:", err));


//  console.log(mongoUrl+" error here 11 db ");
 

// const db = mongoose.connection;

// db.on('connected',()=>{
//     console.log("connected to mongoDB");
    
// })
// db.on('error', (err) => console.error('❌ MongoDB connection error:', err));
// db.on('disconnected', () => console.warn('⚠️ MongoDB disconnected'));


// module.exports=db; 

///////////////////////////////////////////////////////////////////////////////////////////////////



const mongoose = require('mongoose');
require('dotenv').config(); 
const express = require('express');
const app = express();

// Pick URL from .env
// Example .env: MONGODB_URL=mongodb+srv://helloworld:hellobye12345@cluster0.snl9ffz.mongodb.net/personDB
const mongoUrl = process.env.MONGODB_URL

// Connect to MongoDB
console.log("mongoUrl "+ mongoUrl);
mongoose.connect(mongoUrl)
  // .then(() => console.log('✅ Connected to MongoDB'))
  // .catch((err) => console.error('❌ MongoDB connection error:', err));

// Connection object
const db = mongoose.connection;

// Extra event listeners (optional but useful)
db.on('connected', () => console.log('🟢 Mongoose connected'));
db.on('error', (err) => console.error('🔴 Mongoose error:', err));
db.on('disconnected', () => console.warn('🟡 Mongoose disconnected'));

// Export connection
module.exports = db;
