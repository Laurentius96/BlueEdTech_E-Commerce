// 20°) Importar os métodos do Express para chamar as rotas
const express = require("express");

// 21°) Para usar os métodos do controller
const gamesController = require("../controllers/games.controller");

// 22°) Inicializar o modulo de rotas
const router = express.Router();

// 23°) Criando o EndPoint [GET] /games - Retorna uma lista de jogos pré cadastrados no banco
router.get("/get-games", gamesController.getGames);

// 29°) [GET] /get-game-by-id/{id} - retorna um game de acordo com o seu id
router.get("/get-game-by-id/:id", gamesController.getGameById);

// 34°) [POST] /games/add - Cadastra um novo jogo no banco de dados
router.post("/create", gamesController.createGame);

// 38°) [PUT] /games/edit/{id} - Edita os dados do game de acordo com o id e o objeto recebido
router.put("/edit/:id", gamesController.updateGame);

// 41°) [DELETE] /games/delete - Exclui um game do banco de dados de acordo com o seu id
router.delete("/delete/:id", gamesController.deleteGame);

// 24°) Exportanto o módulo de Rotas
module.exports = router;
