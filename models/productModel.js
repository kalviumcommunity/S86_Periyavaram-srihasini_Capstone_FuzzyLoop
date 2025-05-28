// models/productModel.js

const mongoose = require('mongoose');

// Define the product schema
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,  // Name of the product (required field)
    },
    price: {
      type: Number,
      required: true,  // Price of the product (required field)
    },
    description: {
      type: String,
      required: true,  // Description of the product (required field)
    },
    category: {
      type: String,
      required: true,  // Category of the product (required field)
    },
    imageUrl: {
      type: String,
      required: false,  // Optional: URL to the product image
    },
    stockQuantity: {
      type: Number,
      default: 0,  // Default to 0 if not provided
    },
    ratings: {
      type: Number,
      min: 1,
      max: 5,
      default: 5,  // Default rating is 5 (highest)
    },
  },
  { timestamps: true }  // Automatically add 'createdAt' and 'updatedAt' fields
);

// Create the Product model from the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model to use it in controllers or other files
module.exports = Product;
