const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

//////////////////////////////////////
let mongoUrl='mongodb://localhost:27017/mydatabase';
mongoose.connect(mongoUrl);
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to mongoDB");
    
})

module.exports=db; 

