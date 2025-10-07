const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} - ${req.url}`);
  next();
});

const showPage = (pageName) => (req, res) => {
  res.send(`<h1>Página: ${pageName}</h1><a href="/">Voltar ao início</a>`);
};

app.get('/', showPage('Home'));
app.get('/about', showPage('About'));
app.get('/users', showPage('Users'));
app.get('/signup', showPage('Signup'));

app.post('/data', (req, res) => {
  res.send('<h1>Dados recebidos via POST!</h1><a href="/">Voltar</a>');
});

app.get('/signin', (req, res) => {
  res.send(`
    <h1>Sign In</h1>
    <p>Use o formato /users/:userid para acessar.</p>
    <a href="/signup">Ir para Signup</a>
  `);
});

app.get('/users/:userid', (req, res) => {
  const { userid } = req.params;
  if (!userid) {
    return res.redirect('/signup');
  }
  res.send(`<h1>Bem-vindo, ${userid}!</h1><a href="/">Voltar</a>`);
});

app.use((req, res) => {
  res.status(404).send(`
    <h1>Erro 404 - Página não encontrada</h1>
    <p><a href="/">Voltar ao Início</a></p>
  `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
