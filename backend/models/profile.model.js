const { Mongoose } = require("mongoose")

const mango = reqire('mongoose')

const schema = Mongoose.schema;

const Profleuserschema = new Schema({
    username: {type: String,required: true},
    profile: {type: String,required: true},
    name: {type: String,required: true},
    summary: {type: String,required: true},
    date: {type: Date, require:true}
},{
    timestamp: true
})

const Profiledetail= Mongoose.model('User',Profleuserschema);

module.exports = Profiledetail;