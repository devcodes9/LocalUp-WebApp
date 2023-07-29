const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    contactNumber: {
        type: Number,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'customer', 'store-owner'],
        required: true
    }
}) 

module.exports = mongoose.model("User", userSchema)