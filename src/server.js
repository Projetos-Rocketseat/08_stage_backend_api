let emoji = require("node-emoji");
const fire = emoji.get("fire");

const express = require("express");

const app = express();

//VALORES SÃO OBRIGATÓRIOS
app.get("/:id/:user", (request, response) => {
  const { id, user } = request.params;

  response.send(`
    ID da mensagem: ${id}
    Usuário: ${user}
  `);
});

app.get("/users", (request, response) => {
  const { page, limit } = request.query;

  response.send(`
    Página: ${page}.
    Mostrar: ${limit}
  `);
});

const PORT = 3333;
app.listen(PORT, () =>
  console.log(`Server running on Port http://localhost:${PORT} ${fire} `)
);
