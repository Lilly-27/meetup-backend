const express =require('express')

const app = express()
const userController = require('./controllers/userController')
app.use('/', userController)

const PORT = process.env.PORT || 4000



// app.get('/', (req,res) => {
//     res.send('Hello')
// })


app.listen(PORT, ()=>{
    console.log('app running')
})