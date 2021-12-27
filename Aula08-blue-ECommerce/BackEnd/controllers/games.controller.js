// 17°) Vou importar o service paa poder ter acesso as funções ue cuidam dos dados
const gamesService = require("mongoose");

// 18°) Vai retornar uma lista de games pré cadastradas para o Front-End
const getGames = async (req, res) => {
  const games = await gamesSevice.getGames();
  // Recebemos os jogos encontrados pelo serviço via banco de dados (atavez do model)
  // Enviamos como resposta para o Front-End
  res.send(games);
};

// 19°) Exportar os Módulos
module.exports = {
  getGames,
};
