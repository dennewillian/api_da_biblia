const { personagens, idCounter } = require("./personagens");
const { lugares } = require("./localizacao");

const historias = [
  {
    id: 5,
    titulo: "A Fornalha Ardente",
    personagensIds: [1, 2, 3],
    lugaresIds: [4],
    resumo: "Sadraque, Mesaque e Abede-Nego foram lançados em uma fornalha ardente por se recusarem a adorar a estátua de ouro do rei Nabucodonosor. Deus os protegeu, e nenhum dano sofreram. (Daniel 3)"
  }
];

module.exports = {
  personagens,
  lugares,
  historias
};
