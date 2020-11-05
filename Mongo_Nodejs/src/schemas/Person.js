const mongoose = require('mongoose');

const Person = new mongoose.Schema({
    name:{
        firstName: String,
        lastName: String,
    },
    age:{
        type:Number,
    }
},{strict: false})

module.exports = mongoose.model('Person',Person)