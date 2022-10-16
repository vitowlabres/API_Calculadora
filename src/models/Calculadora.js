class Calculadora
{   
    static verificaNum = (num1, num2) => {
        if(Number(num1) == (num1) && Number(num2) == (num2)){
            return true
        } else {
            return false
        }
    }

    static adicao = (num1,num2)=>{
        return Number(num1)+Number(num2)
    }
}

module.exports = Calculadora