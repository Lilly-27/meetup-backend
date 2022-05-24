const Event = require('../models/eventModels.js')

const seedData = require('./event-seeds.json')

// console.log(seedData)

// process.exit()

Event.deleteMany({})
    .then(() => {
        return Event.insertMany(seedData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() =>{
        process.exit()
    })