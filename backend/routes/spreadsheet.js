const express = require('express');
const router = express.Router();
const multer = require('multer');
const Spreadsheet = require('../models/spreadsheet');

const upload = multer({ dest: 'uploads/' });

// Upload spreadsheet route
router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { filename, path } = req.file;
    const data = await fs.promises.readFile(path, 'utf8');
    const spreadsheet = new Spreadsheet({
      user: req.user.userId,
      filename,
      data,
    });
    await spreadsheet.save();
    res.status(201).json({ message: 'Spreadsheet uploaded successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Spreadsheet upload failed' });
  }
});

// Get all spreadsheets route
router.get('/', async (req, res) => {
  try {
    const spreadsheets = await Spreadsheet.find({ user: req.user.userId });
    res.json(spreadsheets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve spreadsheets' });
  }
});

// Get a specific spreadsheet route
router.get('/:id', async (req, res) => {
  try {
    const spreadsheet = await Spreadsheet.findById(req.params.id);
    if (!spreadsheet) {
      return res.status(404).json({ error: 'Spreadsheet not found' });
    }
    if (spreadsheet.user.toString() !== req.user.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    res.json(spreadsheet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve spreadsheet' });
  }
});

// Update spreadsheet route
router.put('/:id', async (req, res) => {
  try {
    const { filename, data, public } = req.body;
    const spreadsheet = await Spreadsheet.findById(req.params.id);
    if (!spreadsheet) {
      return res.status(404).json({ error: 'Spreadsheet not found' });
    }
    if (spreadsheet.user.toString() !== req.user.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    spreadsheet.filename = filename;
    spreadsheet.data = data;
    spreadsheet.public = public;
    await spreadsheet.save();
    res.json({ message: 'Spreadsheet updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update spreadsheet' });
  }
});

// Delete spreadsheet route
router.delete('/:id', async (req, res) => {
  try {
    const spreadsheet = await Spreadsheet.findById(req.params.id);
    if (!spreadsheet) {
      return res.status(404).json({ error: 'Spreadsheet not found' });
    }
    if (spreadsheet.user.toString() !== req.user.userId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    await spreadsheet.remove();
    res.json({ message: 'Spreadsheet deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete spreadsheet' });
  }
});

module.exports = router;