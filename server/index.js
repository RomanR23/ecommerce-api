const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProducts');

const app = express();

const port = 3002
app.use(express.json())


app.get('/api/products', getProducts)
app.get('/api/products/:id', getProduct)

app.listen(3002, ()=> console.log(`Server Running on Port ${port}`))