const express = require('express');
const Event = require('../models/eventModels')

const router = express.Router();


//Find by a field
router.get('/coffeechats', (req,res)=>{
    Event.find({'tag':'coffee_chats'}),(err, event).then((data)=>
    res.json(data)
    )
})

router.get('/socials', (req,res)=>{
    Event.find({'tag':'socials'}),(err, event).then((data)=>
    res.json(data)
    )
})

router.get('/codingsessions', (req,res)=>{
    Event.find({'tag':'coding_sessions'}),(err, event).then((data)=>
    res.json(data)
    )
})

module.exports = router