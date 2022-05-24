//Models
const mongoose = require('../db/server')


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    company: String,
    link_to_github: String,
    location: String,
    hobbies: String
})




const User = mongoose.model('User', UserSchema)

module.exports = User