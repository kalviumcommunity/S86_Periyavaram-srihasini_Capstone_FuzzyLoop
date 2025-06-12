const Entry = require('../models/Entry');

// POST - Create a new entry
exports.createEntry = async (req, res) => {
  try {
    const newEntry = new Entry(req.body);
    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET - Get all entries
exports.getEntries = async (req, res) => {
  try {
    const entries = await Entry.find();
    res.status(200).json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
