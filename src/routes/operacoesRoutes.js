import express from 'express';
import Operacoes from '../controllers/operacoes.js';

const app = express()

app.use(express.json())

//rotas disponíveis

app.get('/adicao/:id', Operacoes.adicao);

app.get('/subtracao/:id', Operacoes.subtracao);

app.get('/multiplicacao/:id', Operacoes.multiplicacao);

app.get('/divisao/:id', Operacoes.divisao);