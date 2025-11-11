const mongoose = require('mongoose');

const prsonSchema = mongoose.Schema({
   name:{
     type:String,
     required:true
   },
    age:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        // required:true,
        unique:true
    },
    address:{
        type:String,

    },
    salary:{
        type:String,
        required:true
    }
    
   
});
const Person = mongoose.model("Person",prsonSchema);
module.exports=Person;