let express = require('express')
let router = express.Router()

router.get('/students/new', (req,res) => {
    let students = ["ankit", "suraj", "prashant", "ravi"]
    res.render("students.ejs",{list : students})
})

router.get("/studentsDetails", (req,res) => {
    let student = { name: "rahul", email: "rahul@altcampus.io" }
    res.render('studentDetails.ejs',{student : student})
})

module.exports = router