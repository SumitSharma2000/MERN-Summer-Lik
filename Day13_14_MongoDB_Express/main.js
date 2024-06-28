require("dotenv").config();

const express = require('express');
// const { products } = require("./database/db.js");

const productRouter = require('./routes/abc.js');

// const {getProduct, createProduct}  = require('./controllers/productController.js')

// const express = require("express");
const app = express();

app.use(express.json());

app.use('/products', productRouter);

// app.get("/products", async (req, res) => {
//   const pr = await products.find().toArray();
//   // const products1 = await products.find();
//   res.json({
//     status: "success",
//     data: {
//       products: pr,
//     },
//   });
// });

// make a post api
// app.post("/products", async (req, res) => {
//   const body = req.body;
//   if(!body.price || !body.name){
//     res.status(400);
//     res.json({
//       status: "fail",
//       message : "name , price, id not found"
//     });
//     return
//   }

//   const product = await products.insertOne(body);
//   res.json({
//     status: "success",
//     data: {
//       product: product
//     }
//   });
// });


// app.route('./products').getProduct().createProduct();
app.listen(process.env.PORT || 1800, () => {
  console.log("Server is running on port 1400");
});
