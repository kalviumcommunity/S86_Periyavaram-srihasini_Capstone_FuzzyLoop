// models/entry.js

const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product', // 🔗 reference to Product
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Entry', entrySchema);
