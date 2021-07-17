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
        res.render('users.ejs', {users : user})
        res.redirect('/users')
    })
})

router.get('/', (req,res) => {
    User.find({}, (err,user) => {
        if(err) return res.send(err)
        res.render('users.ejs', {users: user})
    })
})

router.get('/:id', (req,res) => {
    let id = req.params.id;
    User.findById(id,(err,user) => {
        if(err) return res.send(err);
        res.render('detailsOfBook.ejs', {users: user})
    })
})

router.get('/:id/edit', (req,res) => {
    let id = req.params.id
    User.findById(id,(err,user) => {
        if(err) return res.send(err)
        res.render('editBook.ejs', {users : user})
    })
})

router.post('/:id', (req,res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body, (err,user) => {
        if(err) return next(err)
        res.redirect('/users/' + id)
    })
})

module.exports = router;