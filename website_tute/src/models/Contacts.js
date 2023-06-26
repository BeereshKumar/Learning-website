const mongoose = require('mongoose');

const schemaContact = mongoose.Schema({
    email: String,
    phone: String,
    query:String
    
})
module.exports = mongoose.model('queries',schemaContact)