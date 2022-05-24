const express = require('express')
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();

const userController = require('./controllers/userController');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(userController);
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/' + 'public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const PORT = process.env.PORT || 4000


app.listen(PORT, ()=>{
    console.log('app running')
})