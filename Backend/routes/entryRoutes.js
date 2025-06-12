const express = require('express');
const router = express.Router();
const {
  createEntry,
  getEntries
} = require('../controllers/entryController');

router.post('/', createEntry); // Write to DB
router.get('/', getEntries);   // Read from DB

module.exports = router;
