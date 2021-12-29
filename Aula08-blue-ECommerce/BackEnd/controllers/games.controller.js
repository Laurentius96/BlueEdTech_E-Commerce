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

// 33° & 35°) Função que recebe um objeto via requisição (Front-End) e envia para ser cadastrado no banco de dados
const createGame = async (req, res) => {
  const game = req.body;

  if (
    !game ||
    !game.nome ||
    !game.valor ||
    !game.nota ||
    !game.lancamento ||
    !game.plataforma ||
    !game.genero
  ) {
    res.status(400).send({
      message: "Não foi enviado todos os dados para a criação do game.",
    });
  }
  await gamesService
    .createGame(game)
    .then(() => {
      res.send({ message: "Game criado com sucesso!" });
    })
    .catch(() => {
      res.status(500).send({ message: `Erro no servidor: ${err}` });
    });
};

// 37°)
const updateGame = async (req, res) => {
  const id = req.params.id;
  const gameEdit = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send({ message: "ID inválido!" });
  }

  if (
    !gameEdit ||
    !gameEdit.nome ||
    !gameEdit.valor ||
    !gameEdit.nota ||
    !gameEdit.lancamento ||
    !gameEdit.plataforma ||
    !gameEdit.genero
  ) {
    res.status(400).send({
      message: "Não foi enviado todos os dados para a edição do game.",
    });
  }

  await gamesService
    .updateGame(id, gameEdit)
    .then(() => {
      res.send({ message: "Game editado com sucesso!" });
    })
    .catch((err) => {
      res.status(500).send({ message: `Erro no servidor: ${err}` });
    });
};

// 40°) Recebe um id via parametro da requiscao e envia para o servico para ser excluido do banco de dados
const deleteGame = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).send({ message: "ID inválido!" });
  }

  await gamesService
    .deleteGame(id)
    .then(() => {
      res.send({ message: "Game deletado com sucesso!" });
    })
    .catch((err) => {
      res.status(500).sen({ message: `Erro no servidor:${err}` });
    });
};

// 19°) Exportar os Módulos
module.exports = {
  getGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};
