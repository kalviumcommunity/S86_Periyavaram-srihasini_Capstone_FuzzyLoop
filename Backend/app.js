const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json()); // Allows us to parse incoming JSON bodies

// Routes
app.use('/api/products', productRoutes);

module.exports = app;
