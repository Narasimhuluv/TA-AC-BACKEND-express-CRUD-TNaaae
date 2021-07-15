let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose')

// initiatives 
let app = express();

// connecting database
mongoose.connect("mongodb://localhost/User",{ useNewUrlParser: true , useUnifiedTopology : true} ,(err) => {
    console.log(err ? err : "Connected to Database")
})

// middlerwares
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// view engine middleware
app.set('view engine', 'views')
app.set('views', __dirname + '/views')

// Routes 
app.use('/', require('./router/users'))


// error Middlewares 
app.use((req,res,next) => {
    res.send("404 page is not found")
})

// listerner
app.listen(3000, ()=> {
    console.log('Server is running on port 3k')
})