const express = require('express');
const multer = require('multer');
const router = express.Router();

// Configure multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

// Route
router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully', file: req.file });
});

module.exports = router;
