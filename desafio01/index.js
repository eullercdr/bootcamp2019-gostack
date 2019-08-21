const express = require("express");
const server = express();
let contRequest = 0;

server.use((req, res, next) => {
  contRequest++;
  console.log(`Foram realizadas ${contRequest} requisições`);
  return next();
});

server.get("/projetos", (req, res) => {
  return res.json("Ok");
});

server.listen(3000);
