const express = require("express");
const router = express.Router();
const Word = require("../models/Word");

// Criar palavra
router.post("/", async (req, res) => {
  const word = await Word.create(req.body);
  res.json(word);
});

// Listar palavras
router.get("/", async (req, res) => {
  const words = await Word.find().sort({ createdAt: -1 });
  res.json(words);
});

module.exports = router;

