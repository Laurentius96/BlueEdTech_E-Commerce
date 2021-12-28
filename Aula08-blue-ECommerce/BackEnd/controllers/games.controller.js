// 17°) Vou importar o service paa poder ter acesso as funções ue cuidam dos dados
const gamesService = require("../services/games.service");

// 30°) Chamando o mongoose
const mongoose = require("mongoose");

// 18°) Vai retornar uma lista de games pré cadastradas para o Front-End
const getGames = async (req, res) => {
  const games = await gamesService.getGames();
  // Recebemos os jogos encontrados pelo serviço via banco de dados (atavez do model)
  // Enviamos como resposta para o Front-End
  res.send(games); // jogar no front
};

// 28° & 31°) Recebe um Id via parametro da requisicao e busca um game no banco de dados
const getGameById = async (req, res) => {
  // Acesso o id via parametro da requisicao
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send({ message: "ID inválido!" });
  }

  const game = await gamesService.getGameById(id);

  if (!game) {
    res.status(404).send({ message: "Game não encontrado!" });
  }

  res.send(game);
};

// 19°) Exportar os Módulos
module.exports = {
  getGames,
  getGameById,
};
