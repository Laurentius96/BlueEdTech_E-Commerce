// 14°) Importar a nossa model para uar as fuções do mongo no sevice
const Game = require("../models/games");

// 15°) Criando os Métodos
const getGames = async () => {
  // Vai conectar com o banco de dados e retornar a lista de games
  // Find = busca dados no banco de dados de acordo com o filtro, se não houver filtros, busca todos os dados cadastrados
  const games = await Game.find();
  return games;
};

// 27°) Recebe um id e faz uma busca no banco de dados de acordo com esse id
const getGameById = async (id) => {
  const game = await Game.findById(id);
  return game;
};

// 32°) Recebe um objeto (JSON) e salva no banco de dados
const createGame = async (game) => {
  // Recebe o objeto e envia para ser cadastro no banco atraves do model da funcao create.
  return await Game.create(game);
};

// 16°) Módulo de exportação
module.exports = {
  getGames,
  getGameById,
};
