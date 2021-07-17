let mongoose = require('mongoose')
let Schema = mongoose.Schema

let userDairySchema = new Schema({
    name : String,
    email : String,
    age : Number,
    bio : String
}, {timestamps : true})

let UserDairy = mongoose.model('UserDairy', userDairySchema);
module.exports = UserDairy;