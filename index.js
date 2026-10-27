const express = require("express");
const app = express();

// Rota 1 - página inicial
app.get("/", function (req, res) {
  res.send(`
    <h1>Bem-vindo ao meu site!</h1>
    <p>Projeto de Desenvolvimento de Software em Nuvem - Gabriel Bitencourt</p>
    <a href="/sobre">Sobre</a> | <a href="/produtos">Produtos</a>
  `);
});

// Rota 2 - sobre
app.get("/sobre", function (req, res) {
  res.send(`
    <h1>Sobre</h1>
    <p>Aplicação Node.js com Express, hospedada na AWS e no Railway.</p>
    <a href="/">Voltar</a>
  `);
});

// Rota 3 - produtos
app.get("/produtos", function (req, res) {
  res.send(`
    <h1>Lista de Produtos</h1>
    <ul>
      <li>Notebook</li>
      <li>Mouse</li>
      <li>Teclado</li>
    </ul>
    <a href="/">Voltar</a>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Servidor rodando na porta ${PORT}`);
});