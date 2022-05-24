//Models
const { Schema } = require('mongoose')
const mongoose = require('../db/server')


const EventSchema = new mongoose.Schema({
    date: String,
    time: String,
    location: String,
    address: String,
    company: String,
    // user_profile_info: [{type: Schema.Types.ObjectId, ref: 'User'}],
    event_blurb: String,
    event_picture: String,
    hosts: String
})




const Event = mongoose.model('Event', EventSchema)

module.exports = Event