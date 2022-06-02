const express = require('express');
const Event = require('../models/eventModels')

const router = express.Router();


//Find by a field
router.get('/coffeechats', (req,res)=>{
    Event.find({'tag':'coffee_chats'}).then((data)=>
    res.json(data)
    )
})

router.get('/socials', (req,res)=>{
    Event.find({'tag':'socials'}).then((data)=>
    res.json(data)
    )
})

router.get('/codingsessions', (req,res)=>{
    Event.find({'tag': 'socials'}).then((data)=>
    res.json(data)
    )
})
//with id
router.get('/coffeechats/:id', (req,res)=>{
    Event.findById(req.params.id).then((data)=>
    res.json(data)
    )
})

router.get('/socials/:id', (req,res)=>{
    Event.findById(req.params.id).then((data)=>
    res.json(data)
    )
})

router.get('/codingsessions/:id', (req,res)=>{
    Event.findById(req.params.id).then((data)=>
    res.json(data)
    )
})
module.exports = router