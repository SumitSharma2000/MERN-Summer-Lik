const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
  description: String,
  category: {
    type: String,
    enum: ["Electronics", "Fashion", "Food", "Home", "Sports"],
    // required: true,
  },
  stock:{
    type:Number,
    required:true
  },
  createdAt:{
    type:Date,
    default:Date.now
  },
  updatedAt:{
    type:Date,
    default: Date.now
  }
});

const ProductModel = mongoose.model("product", productSchema);

module.exports= ProductModel;


 
