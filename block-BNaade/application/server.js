let express = require('express');
let logger = require('morgan');
let mongoose = require('mongoose')
let path = require('path')

// instantiating 
let app = express();

// Connecting to database
mongoose.connect("mongodb://localhost/userDatabase",{useNewUrlParser : true, useUnifiedTopology : true},(err) => {
    console.log(err ? err : "Connected to Database")
})

// Middlewares
// app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + "/public"))

//  view engine middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , 'views') )

// Routers 

app.use('/users', require("./router/index"))

// error handlers 

app.use((req,res) => {
    res.send("404 page is not found")
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})