import express from 'express';
import Operacoes from '../controllers/operacoes.js';

const router = express.Router();

router
    .get('/adicao', (req, res) => {
    res.status(200).send("oi")
    })
    .get('/subtracao/:id', Operacoes.subtracao)
    .get('/multiplicacao/:id', Operacoes.multiplicacao)
    .get('/divisao/:id', Operacoes.divisao)

export default router;