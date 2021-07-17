let express = require('express');
let router = express.Router();
let User = require("../models/User")


router.get('/new', (req,res) => {
    res.render('userForm.ejs')
})

router.post('/', (req,res) => {
    User.create(req.body, (err,user) => {
        console.log(err,User)
        if(err) return res.redirect('/users/new')
        res.render("allusers.ejs", {users : user})
        res.redirect("/users")
        console.log(user)
    })
})

router.get('/', (req,res) => {
    User.find({}, (err,user) => {
        if(err) return res.send(err)
        console.log(user)
        res.render('allusers.ejs', {users: user})
    })
})

router.get('/:id', (req,res) => {
    let id = req.params.id;
    User.findById(id,(err,user) => {
        if(err) return res.send(err)
        res.render('singleUser', {users : user})
    })
})

router.get("/:id/edit",(req,res) => {
    let id = req.params.id;
    User.findById(id,(err, user) => {
        if(err) return res.send(err)
        res.render("updateUser.ejs",{users : user})
    })
})

router.post('/:id', (req,res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id,req.body,(err,user) => {
        if(err) return res.send(err)
        res.redirect("/users/" + id)
    })
})

router.get('/:id/delete', (req,res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id,req.body,(err,user) => {
        if(err) return res.send(err)
        res.redirect('/users')
    })
})



module.exports = router