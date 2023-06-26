const express = require('express');
const Gallery = require('../models/gallery')
const Detail = require('../models/detail');
const Slider = require('../models/Slide');
const service = require('../models/service');
const Contacts = require('../models/Contacts');



const routes = express.Router();


routes.get("/", async (req, resp) => {
    const details = await Detail.findOne({ "_id": "649417107c9913c7eda41352" })
    const sliderData = await Slider.find();
    const serviceData = await service.find();
   
     


    resp.render("index", {          ///its(details) data are showing on view
        details: details,
        slider: sliderData,
        service: serviceData,
        
    })

})

routes.get("/gallary", async (req, resp) => {
    const details = await Detail.findOne({ "_id": "649417107c9913c7eda41352" })
    const picture = await Gallery.find() 

    console.log(details)

    resp.render("gallery", { 
        details: details,
        gallery:picture
     })
})

// routes.get("/gallary", async (req, resp) => {
//     const galleryData = await picGallery.find();
//     console.log(galleryData);

// })
 

routes.post('/process-contact-form', async (req, resp) => {   //(here"/process-contact-form" will fire then async callback funtion will execute)
    // console.log('accepted form data');
    // console.log(req.body);

    try {
        const data = await Contacts.create(req.body);
        //console.log(data);
        resp.redirect('/')   //redirect() funtion are move to home page 
    
    } catch (error) {
        console.log(error);
        resp.redirect('/') // if error will create after that move to home page 
    
    }
    
})

module.exports = routes