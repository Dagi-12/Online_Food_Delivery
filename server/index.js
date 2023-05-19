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
const Product = require('./models/productModel')

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
//restaurants 
const restaurantRouter=require('./routes/restaurantRouter')

const { configure } = require('@testing-library/react');
//fetching imports
const Partner = require('./models/partnerModel');
const ContactUs=require('./models/contactUsModel');
const Rider=require('./models/riderModel');
const Restaurant=require('./models/restaurantModel');


var corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3001"]
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
app.use('/api/', restaurantRouter);
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



//posting using the  product or adddig menu 
app.post('/products', async (req, res) => {
  try {
    const { name, adjective, description, price, category, imageUrl, email } = req.body;

    Product.findOne({ 'category.name': category })
      .then((response) => {
        if (response !== null) {
          const newProduct = new Product({
            name: name,
            adjective: adjective,
            description: description,
            price: price,
            category: { name: category, email: email, _id: response.category._id },
            imageUrl: imageUrl,
          });
          console.log(newProduct);
          newProduct.save();
          res.json(newProduct);
        } else {
          const newProduct = new Product({
            name: name,
            adjective: adjective,
            description: description,
            price: price,
            category: { name: category, email: email },
            imageUrl: imageUrl,
          });
          console.log(newProduct);
          newProduct.save();
          res.json(newProduct);
        }
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the product' });
  }
});
// DELETE endpoint for deleting a product
app.delete("/products", async (req, res) => {
  try {
    const { name, category } = req.query;

    const deletedProduct = await Product.findOneAndDelete({
      name: name,
      "category.name": category,
    });

    if (deletedProduct) {
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting the product' });
  }
});

//creating endpoint for fetching data for feedback forms
 app.get("/getFeedBack",async(req,res)=>{
    try{
        const feedback =await ContactUs.find({});
        res.send({status:"ok",data:feedback});
    }catch(error){
        console.log(error)
    }
 })

 //Creating endpoint for fetching data of partners requests
app.get("/getAllPartners",async(req,res)=>{
    try{
        const allPartner =await Partner.find({});
        res.send({status:"ok",data:allPartner});
    }catch(error){
        console.log(error)
    }
})

 //creating endpoint for rider application 
app.get("/getRiderApplication",async(req,res)=>{
    try{
        const application=await Rider.find({});
        res.send({status:"ok",data:application});
    }catch(error){
        console.log(error)
    }
})

//creating endpoint for fetching data for all restaurants(registerd partners)
app.get("/getAllRestaurants",async(req,res)=>{
    try{
        const restaurants=await Restaurant.find({});
        res.send({status:"ok",data:restaurants});
    }catch(error){
        console.log(error)
    }   
})   
//Chapa

// app.get('/PaymentForm', (req, res) => {
//   const responseData = {
//     message: 'Hosted Link',
//     status: 'success',
//     data: {
//       checkout_url:
//         'https://checkout.chapa.co/checkout/payment/V38JyhpTygC9QimkJrdful9oEjih0heIv53eJ1MsJS6xG',
//     },
//   };

//   res.json(responseData);
// });


