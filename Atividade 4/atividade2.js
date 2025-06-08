const express = require('express');
const app = express();
const port = 3000;

app.get('/produto', (req, res) => {
  const id = req.query.id;

  if (id === '1') {
    return res.json({ nome: 'Mouse', preco: 100 });
  }

  if (id === '2') {
    return res.json({ nome: 'Teclado', preco: 200 });
  }

// Produto não encontrado
  return res.status(404).send('Produto não encontrado');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});