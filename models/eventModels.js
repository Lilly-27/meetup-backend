const mongoose = require('../db/server')

const EventSchema = new mongoose.Schema({
    event_name: String,
    date: String,
    time: String,
    event_location: String,
    address: String,
    event_company: String,
    event_blurb: String,
    event_picture: String,
    tag: String,
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"    },

})

    



const Event = mongoose.model('Event', EventSchema)

module.exports = Event