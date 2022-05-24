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
router.post('/users', (req,res)=> {
    // User.create(req.body).then(data) =>res.json((data)
    User.create(req.body).then((data)=> res.redirect('/users'))
//    (User.create(req.body))
//     .then(()=> res.json())
// router.post('/users', (req, res) => {
//     User.create(req.body)
//       .then((users) => {
//         res.json('/users');
//       })
//       .catch(console.error);
//   });
  
})


//Update user
router.put('/users/:id', (req,res)=> {
    res.json(User.findByIdAndUpdate({_id: req.params.id}, req.body))
    // .then(items => res.redirect('/'))
    
})

module.exports = router