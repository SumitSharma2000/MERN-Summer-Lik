const express = require('express');
const { getProducts , createProduct, deleteProduct, updateProduct, checkId,replaceProduct} = require('../controllers/productControllers');

const productRouter = express.Router();

productRouter.route('/').get(getProducts).post(createProduct).delete(deleteProduct)
productRouter.route('/:id').put(checkId, replaceProduct).patch(checkId,updateProduct)

module.exports = productRouter
