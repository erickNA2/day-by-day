var express = require("express");
var router = express.Router();

var voteController = require("../controllers/voteController");

router.post("/cadastrar", function (req, res) {
    
    voteController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    
    voteController.listar(req, res);
});

module.exports = router;