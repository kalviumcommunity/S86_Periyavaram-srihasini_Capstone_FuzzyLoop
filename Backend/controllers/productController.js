const Product = require('../models/productModel');

// GET all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err.message });
  }
};

// POST a new product
const createProduct = async (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = new Product({
    name,
    price,
    description
  });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err.message });
  }
};

module.exports = { getAllProducts, createProduct };
