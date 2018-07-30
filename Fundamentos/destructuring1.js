// recuso do ES2015
/**
 * A funcao do destruction eh apenas de retirar uma variavel dentro do objeto
 * e seter o valor em outra variavel no espoco mais abrangente.
 */
const pessoa = {
    nome: 'Ana',
    idade: 23,
    enredeco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa)
const { nome: n, idade: i } = pessoa

console.log(n, i)

const { endereco: {logradouro, numero, cep}} = pessoa
/** 
 * Destructuring pega os valores de pessoa e seta eles em
 * variaveis 
*/