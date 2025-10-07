const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('[INDEX ROUTE]');
  next();
});

router.get('/', (req, res) => {
  res.send('<h1>Página Inicial</h1><a href="/about">Ir para About</a>');
});

router.get('/signup', (req, res) => {
  res.send('<h1>Página de Signup</h1><a href="/">Voltar</a>');
});

router.get('/signin', (req, res) => {
  res.send('<h1>Página de Signin</h1><p>Use /users/:userid para logar.</p><a href="/">Voltar</a>');
});

module.exports = router;
