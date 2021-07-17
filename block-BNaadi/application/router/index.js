let express = require('express')
let router = express.Router();
let UserDairy = require("../models/UserDairy")
router.get('/new', (req,res) => {
    // res.render('/users.ejs',{})
    res.send('Welcome to the Altcampus')
})


router.post('/', (req,res) => {
    UserDairy.create(req.body, (err, user) => {
        if(err) return res.send(err);
        res.json(user)
    })
})
router.get('/users', (req,res) => {
    UserDairy.find({},(err, user) => {
        if(err) return res.send(err)
        res.render('users.ejs', {users : user})
    })
})

router.get('/:id', (req,res) => {
    let id = req.params.id;
    UserDairy.findById(id,(err,user) => {
        if(err) return res.send(err)
        res.render('singleUser.ejs', {users : user})
    })
})


router.put('/:id/edit', (req,res) => {
    let id = req.params.id;
    UserDairy.findByIdAndUpdate(id,req.body,(err,user) => {
        if(err) return res.send(err)
        res.render('updateUser.ejs', {users : user})
        res.redirect('/userdairy/:id')
    })
})





module.exports = router;