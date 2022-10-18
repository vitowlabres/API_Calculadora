const express = require ('express');
const Operacoes = require ('../controllers/operacoes.js');

const router = express.Router();

router
    .get('/adicao', Operacoes.adicao)
    .get('/subtracao', Operacoes.subtracao)
    .get('/multiplicacao', Operacoes.multiplicacao)
    .get('/divisao', Operacoes.divisao)

module.exports = router;