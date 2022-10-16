const Calculadora = require ('../models/Calculadora.js') 

class Operacoes
{
    static adicao (req,res) {
        let numero1 = Object.values(req.query)[0]
        let numero2 = Object.values(req.query)[1]
        
        //verifica se ambos valores enviados são números
        if (Calculadora.verificaNum(numero1, numero2) === true) {
            res.status(200).json({
                num1: numero1,
                num2: numero2,
                resultado: Calculadora.adicao(numero1,numero2)
            });
        } else {
            res.status(400).json({
                mensagem: 'ERRO! Pelo menos um dos valores informados não é um número'
            });
        }
    };

    static subtracao (req,res) {
        
    };

    static multiplicacao (req,res) {
        
    };

    static divisao (req,res) {
        
    };

}

module.exports = Operacoes