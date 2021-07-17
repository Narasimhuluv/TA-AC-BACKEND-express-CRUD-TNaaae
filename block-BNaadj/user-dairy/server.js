// requires 
let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose');
let path = require('path')

//  Instantiating
let app = express();

// connecting to database
mongoose.connect("mongodb://localhost/user-dairy", {useNewUrlParser : true , useUnifiedTopology : true}, (err) => {
    console.log(err ? err : "Connected to Database")
})

// Middlewares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))
//  View engine midlleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views'))

// Routers
app.use('/users', require("./router/index"))
//  Error MiddleWares
app.use((req,res) => {
    res.send("404 page is not found")
})

// listener 
app.listen(3000, () => {
    console.log("Server is running on port 3k")
})


