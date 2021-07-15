let express = require('express')
let logger = require('morgan')
let mongoose = require('mongoose')
let path = require('path')

//  intensiatives

let app = express();

// Connected to Server
mongoose.connect('mongodb://localhost/school', { useNewUrlParser: true, useUnifiedTopology: true },(err) => {
    console.log(err ? err : "Connected to Server")
})

// middlewares

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static(__dirname + '/public'))

// setup view engine middleware
    
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"))


// Routes 
app.get('/', (req,res) => {
    let obj = {name : "Chinna", age : 23}
    res.render('index', {detail : obj})
})

app.get('/about', (req,res) => {
    let phones = ["iphone","redmi","oneplus", "oppo"]
    res.render('about', {phones : phones})
})

app.get('/local', (req,res) => {
    res.locals.message = "Hello World I am Narasimhulu"
    res.render('local')
})

app.listen(5000, () => {
    console.log('Server is running on port 5k')
})