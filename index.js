const express = require('express')
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const userController = require('./controllers/userController');
const eventController = require('./controllers/eventController')
const tagController = require('./controllers/tagController')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/users', userController);
app.use('/api/events', eventController);
app.use('/api', tagController)
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/' + 'public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const PORT = process.env.PORT || 4000

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*" );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  

// app.get('/', (req, res) => {
//     res.set('Access-Control-Allow-Origin', '*');
//     res.send({ "msg": "This has CORS enabled" })
//     })

app.listen(PORT, ()=>{
    console.log('app running')
})