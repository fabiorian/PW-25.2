const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('[ABOUT ROUTE]');
  next();
});

router.get('/', (req, res) => {
  res.send('<h1>Página About</h1><a href="/">Voltar</a>');
});

module.exports = router;
