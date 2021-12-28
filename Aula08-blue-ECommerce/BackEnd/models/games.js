// 10°) Importar o Mongoose - ferramenta que auxilia no desenvolvimento com banco de dados mongoDB
const mongoose = require("mongoose");

/**
 *  Schemas --> É a estrutura de dados do documento('linha tabela') que é aplicado por meio da camada de aplicativo
 *
 *  Documents --> São como se fosse as linhas da nossa tabela .
 *
 *  Model --> São construtores que pegam um schema e cria uma instancia de um documento equivalente a um registro em um banco de dados relacional.
 *
 *  Collections --> São equivalentes as tabelas no banco de dados e elas podem conter varios documentos JSON.
 *
 */

// 11°) Construindo o modelo com as estruturas de dados pre definidos
const gamesModel = new mongoose.Schema({
  nome: { type: String, required: true },
  nota: { type: Number, required: true },
  plataforma: { type: String, required: true },
  valor: { type: String, required: true },
  lancamento: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
});

// 12°) Inicializar o model na nossa collection com o Schemma gamesModel
const Game = mongoose.model("games", gamesModel);

// 13°) Exporto o módulo para que ele possa usar as funções do naco de dados
module.exports = Game;
