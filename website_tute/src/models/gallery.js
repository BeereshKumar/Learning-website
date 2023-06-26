const mongoose = require('mongoose');

const gallerySchema = mongoose.Schema({
   
    photos:String,
    photolink:String,
    link:String


})
module.exports = mongoose.model('gallery',gallerySchema)