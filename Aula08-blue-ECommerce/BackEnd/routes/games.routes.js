// 20°) Importar o Express
const express = require("express");

// 23°)
const gamesController = require("./../controllers/games.controller");

// 21°) Inicializar o modulo de rotas
const router = express.Router();

// 24°) Criando o EndPoint [GET] /games - Retorna uma lista de jogos pré cadastrados no banco
router.get("/", gamesController.getGames);

// 22°) Exportanto o módulo de Rotas
module.exports = router;
