const express = require('express');
const { getAllProducts, createProduct } = require('../controllers/productController');

const router = express.Router();

// GET all products
router.get('/', getAllProducts);

// POST a new product
router.post('/', createProduct);

module.exports = router;
