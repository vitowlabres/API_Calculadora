import express from 'express';
import Operacoes from '../controllers/operacoes.js';

const router = express.Router();

router
    .get('/adicao', Operacoes.adicao)
    .get('/subtracao/:id', Operacoes.subtracao)
    .get('/multiplicacao/:id', Operacoes.multiplicacao)
    .get('/divisao/:id', Operacoes.divisao)

export default router;