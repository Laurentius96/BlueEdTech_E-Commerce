// 20°) Importar os métodos do Express para chamar as rotas
const express = require("express");

// 21°) Para usar os métodos do controller
const gamesController = require("../controllers/games.controller");

// 22°) Inicializar o modulo de rotas
const router = express.Router();

// 23°) Criando o EndPoint [GET] /games - Retorna uma lista de jogos pré cadastrados no banco
router.get("/get-games", gamesController.getGames);

// 29°) [GET] /games/{id} - retorna um game de acordo com o seu id
router.get("/get-game-by-id/:id", gamesController.getGameById)

// 24°) Exportanto o módulo de Rotas
module.exports = router;
