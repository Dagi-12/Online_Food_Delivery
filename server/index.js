// const express=require("express");
// const bodyParser=require("body-parser");
// const cors =require("cors");

// const db=require('./db');
// const app=express();
// const productRouter = require('./routes/productRouter');


// var corsOptions = {
//     origin: "http://localhost:3000"
// }

// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get("/", (req, res) => {
//     res.json({ message: "Welcome to Food Ordering"});
// });

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// app.use('/api/', productRouter);

// new 

// app.use('/api/', productRouter);const express=require("express");

require('dotenv').config();
const express=require('express');
const bodyParser=require("body-parser");
const cors =require("cors");

const db=require('./db');
const app=express();


//product router
const productRouter = require('./routes/productRouter');


//products Router
// const productsRouter=require('./routes/ProductsRouter')
// const productsRouter = require('./routes/ProductsRouter');

//user router
const userRouter = require('./routes/userRouter');
//rider router
const riderRouter=require('./routes/riderRouter')
//partner router
const partnerRouter =require('./routes/partnerRouter')
//admin router
const adminRouter =require('./routes/adminRouter')
const authRouter=require('./routes/auths')
//Contact us 
const contactUsRouter=require('./routes/contactUsRouter')

const { configure } = require('@testing-library/react');
const Partner = require('./models/partnerModel');
const ContactUs=require('./models/contactUsModel');
const Rider=require('./models/riderModel')


var corsOptions = {
    origin: "http://localhost:3000"
}


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Food Ordering"});
});
app.use('/api',riderRouter)
app.use('/api/', productRouter);
app.use('/api/', userRouter);
app.use('/api/', partnerRouter);
app.use('/api/', adminRouter);
app.use('/api/', authRouter);
app.use('/api/', contactUsRouter);
//products
// app.use('/api/', productsRouter);

// app.use('/api/', productsRouter);





// db connection and listen on port
db.on('open',()=>{
    app.listen(process.env.PORT, () => {
        console.log(`Connected to Database and Server is running on port ${process.env.PORT}`);
    });
    
}).on('error',(error)=>{
    console.log('Failed to conncet to db :',error)
})

//Creating API for fetching data of partners
app.get("/getAllPartners",async(req,res)=>{
    try{
        const allPartner =await Partner.find({});
        res.send({status:"ok",data:allPartner});
    }catch(error){
        console.log(error)
    }
})

//creating API for fetching data for feedback forms
 app.get("/getFeedBack",async(req,res)=>{
    try{
        const feedback =await ContactUs.find({});
        res.send({status:"ok",data:feedback});
    }catch(error){
        console.log(error)
    }
 })

 //creating API for rider application 
app.get("/getRiderApplication",async(req,res)=>{
    try{
        const application=await Rider.find({});
        res.send({status:"ok",data:application});
    }catch(error){
        console.log(error)
    }
})