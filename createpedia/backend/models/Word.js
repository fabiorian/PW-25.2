const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true
  },
  meaning: {
    type: String,
    required: true
  },
  phonetic: String,
  example: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Word", WordSchema);
