const { Mongoose } = require("mongoose")

const mango = reqire('mongoose')

const schema = Mongoose.schema;

const userschema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenth: 3
    },

},{
    timestamp: true
})

const User= Mongoose.model('User',userschema);

module.exports = User;