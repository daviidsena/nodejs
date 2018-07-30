// Armazenando uma funcao(anonima) em uma variavel
const imprimirSoma = function (a , b) {
    console.log(a+b)
}

imprimirSoma(2,4)

// Armazenando uma funcao arrow(flecha =>) em uma variavel 
const soma = (a, b) => {
    return a + b
}
console.log(soma(1,3))

// retorno implicito
const subtracao = (a,b) => a-b
/**
 * (a,b)    Sao os parametros
 * =>       Arrow function
 * a-b      O bloco fica reduzido em uma linha e o return ficou implicito
 */
console.log(subtracao(3,1))

// Podemos usar inumeras coisas com Arrow Function
const imprimir2 = a => console.log(a)
imprimir2("SHOW!!")