//Models
const mongoose = require('../db/server')
// const validator = require('validator')


const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    user_company: String,
    link_to_github: String,
    user_location: String,
    hobbies: String,
    event: {
        type: mongoose.Types.ObjectId,
        ref: "Event"    },

})




const User = mongoose.model('User', UserSchema)

module.exports = User