const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
const gallary = require('./models/gallery');
const bodyParser = require('body-parser');  //bodyParser are package
const Detail = require('./models/detail');
const Slider = require("./models/Slide");
const Service = require('./models/service');

const app = express();


const routes = require('./routes/main')


app.use(bodyParser.urlencoded(  //urlencoded data will converted coded data
   {
      extended: 'true'
   }
))
//(use of static files) static/css/Style.css
app.use('/static', express.static('public'))  

/////////////////////////////////////////////////

app.use('', routes)


// template engine

app.set('view engine', 'hbs') //hbs is the views engine
app.set('views', 'views')
////////////////////////////////////////////////////////////////

hbs.registerPartials('views/partials')




//db connection/////////////////////////////////////////////////
mongoose.connect("mongodb://localhost:27017/website_tute").then(() =>
   console.log("Connected to mongo Successful")
)
////////////////////////////////////////////////////////////////////
// gallary.create([
//    {
//       photo:'gallery photos',
//       photolink:'/static/images/gallery/college.webp',
//       link:'Obtain degree'

//    },
//    {
//       photo:'gallery photos',
//       photolink:'/static/images/gallery1.jpg',
//       link:'composition'

//    }
    
// ])

///////////////////////////////////////////////////////////////
// Service.create([
//    {
//       icon: 'fab fa-accusoft',
//       title: 'Provide Best Courses',
//       description: 'We provided courses that helps our student in learning and placements',
//       linkText: 'https://smartprogramming.in/',
//       link: 'Check'
//    },

//    {
//       icon: 'fab fa-affiliatetheme',
//       title: 'Learn Projects',
//       description: 'We provided courses that helps our student in learning and placements',
//       linkText: 'https://smartprogramming.in/',
//       link: 'Learn'
//    },
//    {
//       icon: 'fa-solid fa-face-smile',
//       title: 'Get best opportunities',
//       description: 'We provided placement with best MNCs',
//       linkText: 'https://smartprogramming.in/',
//       link: 'Get'
//    }

// ])
/////////////////////////////////////////////////////////////////
// Slider.create([

//    {
//       title:'Learn JavA is very easy manner',
//       subTittle:'Java is the most popular prgramming language',
//       imageUrl:'/static/images/code.jpg'
//    },

//    {
//       title:'Learn Django in Python',
//       subTittle:'Django is the most important framework o the python programming',
//       imageUrl:'/static/images/codeone.jpg'
//    },

//    {
//       title:'What about is Node js?',
//       subTittle:'Node js is the famous environment for js',
//       imageUrl:'/static/images/codetwo.jpg'
//    }

// ])

/////////////////////////////////////////////////////////////////////
// Detail.create({
//    brandName: "Technical solution",

//    brandIconUrl: "https://img.freepik.com/free-vector/young-boy-studying-front-laptop-with-space-objects_1308-87551.jpg",
//    links: [
//       {
//          label: "Home",
//          url: "/"
//       },
//       {
//          label: "Services",
//          url: "services"
//       },
//       {
//       label: "Gallery",
//       url: "/gallery"
//      },
//    {
//       label: "About",
//       url: "/about"
//    },
//    {
//       label: "Contact us",
//       url: "/contact-us"
//    },

// ],
// })

/////////////////////////////////////////////////////////////




app.listen('8000', "127.0.0.1", () => {
   console.log("server started");
})