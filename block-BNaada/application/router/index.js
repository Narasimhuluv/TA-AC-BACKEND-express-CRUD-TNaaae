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
        if(err) return res.redirect('/users/new');
        res.send(user)
    })
})

router.get('/', (req,res) => {
    User.find({}, (err,user) => {
        if(err) return res.send(err)
        res.render('users.ejs', {user: user})
    })
})

router.get('/:id', (req,res) => {
    let id = req.params.id;
    User.findById(id,(err,user) => {
        if(err) return res.send(err);
        res.render('detailsOfBook.ejs', {users: user})
    })
})



module.exports = router;