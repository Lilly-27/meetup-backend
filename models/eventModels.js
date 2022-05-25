const mongoose = require('../db/server')
// const validator = require('validator')
const EventSchema = new mongoose.Schema({
    date: String,
    time: String,
    event_location: String,
    address: String,
    event_company: String,
    event_blurb: String,
    event_picture: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"    },

})

    



const Event = mongoose.model('Event', EventSchema)

module.exports = Event