// 14°) Importar a nossa model para uar as fuções do mongo no sevice
const Game = require("./../models/games");

// 15°) Criando os Métodos
const getGames = async () => {
  // Vai conectar com o banco de dados e retornar a lista de games
  // Find = busca dados no banco de dados de acordo com o filtro, se não houver filtros, busca todos os dados cadastrados
  const games = await Game.find();
  return games;
};

// 16°) Módulo de exportação
module.exports = {
    getGames,
}
