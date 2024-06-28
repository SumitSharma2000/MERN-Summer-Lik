const express = require('express');
const {getProduct, createProduct}  = require('../controllers/productController.js')

const productRouter = express.Router();

productRouter.route('/')
.get(getProduct)
.post(createProduct)

module.exports = productRouter;