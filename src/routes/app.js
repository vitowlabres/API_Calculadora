import express from 'express';

const app = express();

app.use(express.json())

// Retorno padrão para a rota '/'
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: `Bem vindo à API Calculadora, utilize o método Get nas rotas conforme a operação desejada, informando como parâmetros os números a serem utilizados na operação`,
        rota1: `/adicao`,
        rota2: `/subtracao`,
        rota3: `/multiplicacao`,
        rota4: `/divisao`,
    })
})

export default app