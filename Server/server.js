// import { Server } from 'http';

// const express = require('express');
// const dotenv = require('dotenv');
// // const products = require('./data/products.js');
import dotenv from 'dotenv';
import express from 'express';
import colors from 'colors';

import products from './data/products.js';
import connectDB from './config/db.js'

dotenv.config();
connectDB();

const app = express();

app.get('/', (req,res) => {
    res.send('API Is Ruunin!');
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((product) => product._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server is Running at ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
    
});
