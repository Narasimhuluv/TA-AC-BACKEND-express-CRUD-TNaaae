let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose');


// intentiatives 
let app = express();

//  Connected to Server 
mongoose.connect("mongodb://localhost/studentData",{useNewUrlParser: true , useUnifiedTopology : true},(err) => {
    console.log(err ? err : "Connected to Database")
})

//middleWares 
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// view engine middlewares
app.set("view engine", "views")
app.set('views', __dirname + '/views')

// Routers
app.use('/', require('./router/index'))
app.use('/students', require('./router/routers'))

// error handler middlewares

app.use((req,res,next) => {
    res.send("404 page is not found")
})

// listener 

app.listen(5000, () => {
    console.log("Server is running on port 5k")
})
