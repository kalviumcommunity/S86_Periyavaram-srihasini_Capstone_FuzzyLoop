// controllers/entryController.js

const Entry = require('../models/entry');

// Get all entries with related product info
const getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find().populate('product');
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new entry with product reference
const createEntry = async (req, res) => {
  const { title, message, productId } = req.body;

  try {
    const newEntry = await Entry.create({
      title,
      message,
      product: productId,
    });

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllEntries,
  createEntry,
};
