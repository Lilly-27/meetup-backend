const express = require('express')
const User = require('../models/userModels')

const router= express.Router()

//Display all users
router.get('/', (req,res) => {
    User.find({}).then((data)=>
    res.json(data)
    )
});

router.get('/', (req,res) => {
    User.find({}).then((data)=>
    res.json(data)
    )
});
//Add new user
router.post('/', (req,res)=> {
    User.create(req.body).then(() => res.redirect('/'))  
})


//Update user
router.put('/users/:id', (req,res)=> {
    res.json(User.findByIdAndUpdate({_id: req.params.id}, req.body))
    // .then(items => res.redirect('/'))
    
})

module.exports = router