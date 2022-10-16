const express = require('express');
const router = require('./operacoesRoutes.js');

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).json({
            mensagem: `Bem vindo à API Calculadora, utilize o método Get nas rotas conforme a operação desejada, informando como parâmetros os números a serem utilizados na operação`,
            rota1: `/adicao`,
            rota2: `/subtracao`,
            rota3: `/multiplicacao`,
            rota4: `/divisao`,
        })
    })

    app.use(
        express.json(),
        router
    )
}

module.exports = routes