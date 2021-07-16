let express = require('express');
let router = express.Router();
let User = require('../models/user')

router.get('/', (req,res) => {
    res.render('userForm')
})

router.get('/new', (req,res) => {
    res.render('userForm')
})
router.post('/new', (req,res) => {
    console.log(req.body)
    User.create(req.body, (err,user) => {
        console.log(err,user)
    })
})


module.exports = router;