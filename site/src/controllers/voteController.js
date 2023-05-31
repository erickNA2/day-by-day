var voteModel = require("../models/voteModel");

function listar(req, res) {
  voteModel
    .listar()
    .then(function (resultado) {
      // precisamos informar que o resultado voltará para o front-end como uma resposta em json
      res.status(200).json(resultado);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
  var voto = req.body.votoServer;
  var idUsuario = req.body.idServer;

  if (voto == undefined) {
    res.status(400).send("Sua voto undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("Usuario não encontrado!");
  }

  voteModel
    .cadastrar(voto, idUsuario)
    .then(function (resposta) {
      res.status(200).json(resposta);
    })
    .catch(function (erro) {
      res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
  listar,
  cadastrar,
};
