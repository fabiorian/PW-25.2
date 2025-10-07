const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('[USERS ROUTE]');
  next();
});

router.get('/', (req, res) => {
  res.send('<h1>Página de Usuários</h1><a href="/">Voltar</a>');
});

router.get('/:userid', (req, res) => {
  const { userid } = req.params;

  if (!userid) {
    return res.redirect('/signup');
  }

  res.send(`<h1>Bem-vindo, ${userid}!</h1><a href="/">Voltar</a>`);
});

module.exports = router;
