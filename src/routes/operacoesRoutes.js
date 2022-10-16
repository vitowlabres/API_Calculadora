const express = require ('express');
const Operacoes = require ('../controllers/operacoes.js');

const router = express.Router();

router
    .get('/adicao', Operacoes.adicao)
    .get('/subtracao/:id', Operacoes.subtracao)
    .get('/multiplicacao/:id', Operacoes.multiplicacao)
    .get('/divisao/:id', Operacoes.divisao)

module.exports = router;