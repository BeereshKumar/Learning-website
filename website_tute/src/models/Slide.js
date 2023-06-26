const mongoose = require('mongoose');

const sliderSchema = mongoose.Schema({
    title: String,
    subTittle: String,
    imageUrl:String,
    class:String
})

module.exports=mongoose.model('slider',sliderSchema)