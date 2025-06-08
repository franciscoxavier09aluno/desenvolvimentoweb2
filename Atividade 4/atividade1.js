const express = require('express');
const app = express();
const port = 3000;

// Rota com parâmetro de rota
app.get('/saudacao/:nome', (req, res) => {
  const nome = req.params.nome;
  res.send(`Olá, ${nome}!`);
});

// Rota com parâmetros de query
app.get('/soma', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

// Verifica se os parâmetros são válidos
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ erro: 'Parâmetros inválidos. Use números.' });
  }

  const resultado = a + b;
  res.json({ a, b, resultado });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});