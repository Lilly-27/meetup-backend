
   
const express = require('express');
const Event = require('../models/eventModels')

const router = express.Router();

// Display all events
router.get('/', (req,res) => {
    Event.find({}).then((data)=>
    res.json(data)
    )
});

// Create an event
router.post('/', (req,res)=> {
    console.log(req.body)
    Event.create(req.body).then(() => res.redirect('/events'))  
    
})
// Update an event 
router.put('/:id', async (req,res)=> {
    res.json(await Event.findByIdAndUpdate(req.params.id, req.body))
     
})

// Delete an event
router.delete('/:id', async (req, res)=>{
    res.json(await Event.findByIdAndRemove(req.params.id))
})

module.exports = router