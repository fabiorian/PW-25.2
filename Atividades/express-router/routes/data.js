const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('[DATA ROUTE]');
  next();
});

router.post('/', (req, res) => {
  res.send('<h1>Rota /data (POST)</h1><a href="/">Voltar</a>');
});

module.exports = router;
