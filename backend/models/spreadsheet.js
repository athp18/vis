const mongoose = require('mongoose');

const spreadsheetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  filename: { type: String, required: true },
  data: { type: String, required: true },
  public: { type: Boolean, default: false },
});

module.exports = mongoose.model('Spreadsheet', spreadsheetSchema);