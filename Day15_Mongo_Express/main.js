require('dotenv').config();
require('./config/db')
const express = require('express')
const productRouters = require('./routes/productRoutes')

const app = express();

app.use(express.json());

app.use('/api/v1/products', productRouters)

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})