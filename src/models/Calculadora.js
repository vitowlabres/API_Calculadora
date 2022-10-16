class Calculadora
{   
    static verificaNum(num1, num2){
        if(Number(num1) == (num1) && Number(num2) == (num2)){
            return true
        } else {
            return false
        }
    }

    static adicao (num1, num2) {
        if (this.verificaNum(num1, num2) === true) {
            return {
                num1: Number(num1),
                num2: Number(num2),
                resultado: Number(num1)+Number(num2)
            }
        } else {
            return {
                resultado: 'ERRO! Pelo menos um dos valores informados não é um número'
            }
        }
    }

    static subtracao(num1, num2) {
        if (this.verificaNum(num1, num2) === true) {
            return {
                num1: Number(num1),
                num2: Number(num2),
                resultado: Number(num1)-Number(num2)
            }
        } else {
            return {
                resultado: 'ERRO! Pelo menos um dos valores informados não é um número'
            }
        }
    }

    static multiplicacao(num1, num2) {
        if (this.verificaNum(num1, num2) === true) {
            return {
                num1: Number(num1),
                num2: Number(num2),
                resultado: Number(num1)*Number(num2)
            }
        } else {
            return {
                resultado: 'ERRO! Pelo menos um dos valores informados não é um número'
            }
        }
    }
}

module.exports = Calculadora