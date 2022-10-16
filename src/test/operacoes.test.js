const Operacoes = require("../controllers/operacoes.js") 

const objTesteOK = {
    query: { n1: '4', n2: '2' }
}

const objTesteErro1 = {
    query: { n1: 'a', n2: '2' },
}

const objTesteErro2 = {
    n1: 'a',
    n2: 2
}


// Testes na operação de adição
test('verifica operação de adição', () => {
    expect(Operacoes.adicao(objTesteOK,)).toBe(6)
})

test('verifica operação de adição', () => {
    expect(Operacoes.adicao('a',2)).toBe('erro')
})

test('verifica operação de adição', () => {
    expect(Operacoes.adicao(1,'$')).toBe('erro')
})

// Testes na operação de subtração
test('verifica operação de subtração', () => {
    expect(Operacoes.subtracao(5,2)).toBe(3)
})

test('verifica operação de subtração', () => {
    expect(Operacoes.subtracao('X',4)).toBe('erro')
})

test('verifica operação de subtração', () => {
    expect(Operacoes.subtracao(3,'(')).toBe('erro')
})

// Testes na operação de multiplicação
test('verifica operação de multiplicação', () => {
    expect(Operacoes.multiplicacao(3,5)).toBe(15)
})

test('verifica operação de multiplicação', () => {
    expect(Operacoes.multiplicacao(3,'a')).toBe('erro')
})

test('verifica operação de multiplicação', () => {
    expect(Operacoes.multiplicacao('@',5)).toBe('erro')
})

//Testes na operação de divisão
test('verifica operação de divisão', () => {
    expect(Operacoes.divisao(4,2)).toBe(2)
})

test('verifica operação de divisão', () => {
    expect(Operacoes.divisao('s',2)).toBe('erro')
})

test('verifica operação de divisão', () => {
    expect(Operacoes.divisao(4,'-')).toBe('erro')
})
