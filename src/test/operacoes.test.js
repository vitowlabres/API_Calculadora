const Calculadora = require("../models/Calculadora.js") 

// Testes na operação de adição
test('verifica operação de adição', () => {
    expect(Calculadora.adicao(4,2).resultado).toBe(6)
})

test('verifica operação de adição', () => {
    expect(Calculadora.adicao('a',2).resultado).toBe('ERRO! Pelo menos um dos valores informados não é um número')
})

test('verifica operação de adição', () => {
    expect(Calculadora.adicao(1,'$').resultado).toBe('ERRO! Pelo menos um dos valores informados não é um número')
})

// Testes na operação de subtração
test('verifica operação de subtração', () => {
    expect(Calculadora.subtracao(5,2).resultado).toBe(3)
})

test('verifica operação de subtração', () => {
    expect(Calculadora.subtracao('X',4).resultado).toBe('ERRO! Pelo menos um dos valores informados não é um número')
})

test('verifica operação de subtração', () => {
    expect(Calculadora.subtracao(3,'(').resultado).toBe('ERRO! Pelo menos um dos valores informados não é um número')
})

// Testes na operação de multiplicação
test('verifica operação de multiplicação', () => {
    expect(Calculadora.multiplicacao(3,5).resultado).toBe(15)
})

test('verifica operação de multiplicação', () => {
    expect(Calculadora.multiplicacao(3,'a').resultado).toBe('ERRO! Pelo menos um dos valores informados não é um número')
})

test('verifica operação de multiplicação', () => {
    expect(Calculadora.multiplicacao('@',5).resultado).toBe('ERRO! Pelo menos um dos valores informados não é um número')
})

//Testes na operação de divisão
test('verifica operação de divisão', () => {
    expect(Calculadora.divisao(4,2).resultado).toBe(2)
})

test('verifica operação de divisão', () => {
    expect(Calculadora.divisao('s',2).resultado).toBe('ERRO! Pelo menos um dos valores informados não é um número')
})

test('verifica operação de divisão', () => {
    expect(Calculadora.divisao(4,'-').resultado).toBe('ERRO! Pelo menos um dos valores informados não é um número')
})
