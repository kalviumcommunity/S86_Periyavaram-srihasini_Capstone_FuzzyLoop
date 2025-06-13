// routes/entryRoutes.js

const express = require('express');
const router = express.Router();
const {
  getAllEntries,
  createEntry,
} = require('../controllers/entryController');

router.get('/', getAllEntries);
router.post('/', createEntry);

module.exports = router;
