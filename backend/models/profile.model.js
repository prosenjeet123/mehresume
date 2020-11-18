const { Mongoose } = require("mongoose")

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Profleuserschema = new Schema({
    username: {type: String,required: true},
    profile: {type: String,required: true},
    name: {type: String,required: true},
    summary: {type: String,required: true},
    date: {type: Date, require:true}
},{
    timestamp: true
})

const Profiledetail= mongoose.model('Profiledetail',Profleuserschema);

module.exports = Profiledetail;