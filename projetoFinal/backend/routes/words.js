const express = require("express");
const router = express.Router();
const Word = require("../models/Word");

// Criar palavra
router.post("/", async (req, res) => {
  const word = await Word.create(req.body);
  res.json(word);
});

// Histórico de palavras
router.get("/", async (req, res) => {
  const limit = Number(req.query.limit);

  const words = await Word.find()
    .sort({ createdAt: -1 })
    .limit(limit || 0);

  res.json(words);
});

// Apagar palavra do histórico
router.delete("/:id", async (req, res) => {
  try {
    await Word.findByIdAndDelete(req.params.id);
    res.json({ message: "Palavra apagada com sucesso" });
  } catch (err) {
    res.status(400).json({ error: "Erro ao apagar palavra" });
  }
});

// Editar informações da palavra
router.put("/:id", async (req, res) => {
  try {
    const updatedWord = await Word.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedWord);
  } catch (err) {
    res.status(400).json({ error: "Erro ao editar palavra" });
  }
});

module.exports = router;
