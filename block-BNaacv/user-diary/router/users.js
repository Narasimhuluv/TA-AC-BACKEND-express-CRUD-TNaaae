let express = require('express')
let router = express.Router();

router.get('/users', (req,res) => {
    let list = ['Narasimhulu', 'Chinna', 'Sai' , 'Dinesh']
    res.render('users.ejs',{list : list})
})

router.get('/singleUser/:id', (req,res) => {
    res.render('singleUser.ejs', {name : "chinna" , age : 23})
})

router.get('/users/new', (req,res) => {
    res.render('userForm.ejs')
})

router.post('/users/new', (req,res) => {
    res.send(req.body)
    console.log(req.body)
})

module.exports = router