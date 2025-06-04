const express = require("express");
const app = express();
app.use(express.json());

const { personagens, lugares, historias } = require("./src/constants");

app.get("/", (req, res) => {
  res.json({ message: "Bíblia API está no ar!" });
});

// Função genérica para criar rotas de CRUD
function criarRotasCRUD(nomeRota, array) {
  app.get(`/${nomeRota}`, (req, res) => res.json(array));

  app.get(`/${nomeRota}/:id`, (req, res) => {
    const item = array.find((i) => i.id == req.params.id);
    item ? res.json(item) : res.status(404).json({ error: "Não encontrado" });
  });

  app.post(`/${nomeRota}`, (req, res) => {
    const novo = { id: Date.now(), ...req.body };
    array.push(novo);
    res.status(201).json(novo);
  });

  app.put(`/${nomeRota}/:id`, (req, res) => {
    const i = array.findIndex((i) => i.id == req.params.id);
    if (i >= 0) {
      array[i] = { ...array[i], ...req.body };
      res.json(array[i]);
    } else {
      res.status(404).json({ error: "Não encontrado" });
    }
  });

  app.delete(`/${nomeRota}/:id`, (req, res) => {
    const i = array.findIndex((i) => i.id == req.params.id);
    if (i >= 0) {
      const removido = array.splice(i, 1);
      res.json(removido[0]);
    } else {
      res.status(404).json({ error: "Não encontrado" });
    }
  });
}

// Criar rotas
criarRotasCRUD("personagens", personagens);
criarRotasCRUD("lugares", lugares);
criarRotasCRUD("historias", historias);

// Rota de busca
app.get("/busca", (req, res) => {
  const q = req.query.q?.toLowerCase() || "";
  const busca = (arr, campos) =>
    arr.filter((item) =>
      campos.some((campo) => item[campo]?.toLowerCase?.().includes(q))
    );

  const resultado = {
    personagens: busca(personagens, ["nome", "descricao"]),
    lugares: busca(lugares, ["nome", "descricao", "localizacao"]),
    historias: busca(historias, ["titulo", "resumo"]),
  };

  res.json(resultado);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
