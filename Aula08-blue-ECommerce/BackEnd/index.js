// 1°) Importa às bobliotecas/libs nedessarias
const express = require("express");
const cors = require("cors");

// 2°) Inicializar o express
const app = express();

// 3°) Declarar os middleware
app.use(express.json());
app.use(cors());

// 4°) Definindo a porta e inicialização do servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor inicializado na porta: ${port}`);
});
