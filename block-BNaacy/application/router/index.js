let express = require('express');
let router = express.Router();
let User = require('../models/User');


router.get('/new', (req,res) => {
    res.render('userForm.ejs')
})

router.post('/', (req,res) => {
    // console.log(req.body)
    User.create(req.body, (err,user) => {
        console.log(err,user)
        res.send(user)
    })
})



module.exports = router;