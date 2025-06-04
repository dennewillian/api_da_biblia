let idCounter = 1;

const personagens = [
  {
    id: idCounter++,
    nome: "Sadraque",
    idade: null,
    descricao: "Um dos jovens hebreus levados para a Babilônia. Recusou-se a adorar a estátua de ouro de Nabucodonosor."
  },
  {
    id: idCounter++,
    nome: "Mesaque",
    idade: null,
    descricao: "Amigo de Sadraque e Abede-Nego. Permaneceu fiel a Deus na Babilônia."
  },
  {
    id: idCounter++,
    nome: "Abede-Nego",
    idade: null,
    descricao: "Jovem hebreu que, junto com seus amigos, enfrentou a fornalha ardente por sua fé."
  }
];

module.exports = { personagens, idCounter };
