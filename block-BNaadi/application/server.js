// requires
let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose')
let path = require('path')

// instantiating
let app = express();

// Database Connecting
mongoose.connect("mongodb://localhost/userDairy", {useNewUrlParser : true , useUnifiedTopology : true}, (err) => {
    console.log(err ? err : "Database is connected")
})

// MiddleWares 
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(__dirname + '/public'))

// views engine MiddleWares 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'views'))

// Routers 
app.use('/userdairy', require("./router/index"))

//  Error Handler Middlewares
app.use((req,res) => {
    res.send('404 Page is not found')
})

//  listener

app.listen(5000, ()=> {
    console.log("Server is running on port 5k")
})