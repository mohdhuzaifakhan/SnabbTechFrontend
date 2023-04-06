const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    id:{
        type:String
    },
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    phone_number:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User = new mongoose.model("User",userSchema);



module.exports = User