const express = require("express");
const server = express();
server.use(express.json());

let contRequest = 0;
let projects = [];
let project;
let id;

/*
middleware que será utilizado em todas rotas que recebem o ID do projeto nos
 parâmetros da URL que verifica se o projeto com aquele ID existe. 
 Se não existir retorne um erro, caso contrário permita a requisição 
 continuar normalmente;
*/
function verifyIdProject(req, res, next) {
  id = req.params.id;
  project = projects.find(p => p.id == id);
  if (!project) {
    return res
      .status(400)
      .json({ error: `Não foi encontrado nenhum projeto com ID: ${id}` });
  }
  return next();
}

/*
Middleware global chamado em todas requisições que imprime (console.log) 
uma contagem de quantas requisições foram feitas na aplicação até então;
*/
server.use((req, res, next) => {
  contRequest++;
  console.log(`Foram realizadas ${contRequest} requisições`);
  return next();
});

/*
A rota deve receber id e title dentro corpo de cadastrar um novo projeto 
dentro de um array no seguinte formato: { id: "1", title: 'Novo projeto', 
tasks: [] }; 
*/
server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: []
  };
  projects.push(project);
  return res.json(projects);
});

//Rota que lista todos projetos e suas tarefas;
server.get("/projects", (req, res) => {
  if (projects.length == 0) {
    return res.json({ message: "Não há projetos, adicione um novo projeto" });
  }
  return res.json(projects);
});

/*A rota deve alterar apenas o título do projeto com o id presente 
nos parâmetros da rota;
*/
server.put("/projects/:id", verifyIdProject, (req, res) => {
  const { title } = req.body;
  project.title = title;
  return res.json(projects);
});

//A rota deve deletar o projeto com o id presente nos parâmetros da rota;
server.delete("/projects/:id", verifyIdProject, (req, res) => {
  projects.splice(project, 1);
  return res.send();
});

/*
A rota deve receber um campo title e armazenar uma nova tarefa no array de 
tarefas de um projeto específico escolhido através do id presente nos 
parâmetros da rota;
*/
server.post("/projects/:id/tasks", (req, res) => {
  const { id } = req.params;
});

server.listen(3000);
