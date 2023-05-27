var votoModel = require("../models/votoModel");

function listar(req, res) {
    votoModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var escolha = req.body.escolha;
    var fkUsuario = req.body.fkUsuario

    if (escolha == undefined) {
        res.status(400).send("Sua escolha undefined!");
    } else if(fkUsuario == undefined) {
        res.status(400).send("Usuario não encontrado!");
    }

    votoModel.cadastrar(escolha, fkUsuario).then(function(resposta){
        res.status(200).send("Voto computado");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}