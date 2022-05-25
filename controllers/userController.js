const express = require('express')
const User = require('../models/userModels')

const router= express.Router()

//Display all users
router.get('/', (req,res) => {
    User.find({}).then((data)=>
    res.json(data)
    )
});


//Add new user
router.post('/', (req,res)=> {
    User.create(req.body).then(() => res.redirect('/users'))  
})


//Update user
router.put('/:id', async (req,res)=> {
    console.log(req.body)
    res.json(await User.findByIdAndUpdate(req.params.id, req.body))
     
})

//Delete user
router.delete('/:id', async (req, res)=>{
    res.json(await User.findByIdAndRemove(req.params.id))
})
module.exports = router