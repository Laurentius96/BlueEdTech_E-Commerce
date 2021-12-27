// 1°) Importa às bobliotecas/libs nedessarias
const express = require("express");
const cors = require("cors");

// 8°) Importo o arquivo de cenexão para poder acessar a função de
const Conn = require("./conn/conn");

// 25°) Importa o arquivo de rotas
const gamesRouter = require("./routes/games.routes");

// 2°) Inicializar o express
const app = express();

// 3°) Declarar os middleware
app.use(express.json());
app.use(cors());

// 26°)
app.use("/games", gamesRouter);

// 9°) Chamando a conexão com o banco de dados
Conn();

// 4°) Definindo a porta e inicialização do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor inicializado na porta: ${port}`);
});

/**
 * Modelo MVC:
 *
 * > Model - É o responsável pelos dados e funções do banco de dados
 *
 * > View - É a visão do cliente ou seja (HTML, APP, SMARTWATCH, SMART TV, VUE, REACT, ANGULAR)
 *
 * > Controller - É responsável por gerenciar os fluxos e das regras do sistema.
 *
 * > Rotas - São os responsáveis pelos endpoints e métodos da API (GET/POST/PUT/DELETE)
 *
 * > Serviços - Responsáveis por conectar ao nosso modelo para chamr as funções do banco de dados (lida com dados)
 *
 */
