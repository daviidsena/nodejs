// Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(1, 3)
imprimirSoma(1) // Quando passamos apenas um valor e ele pede duas, o valor não definido resultara em undefined
imprimirSoma(1,2,3,4,5,6,6,7,7,8) // Nesse caso ele pega os valores que quer e ignora os demais.
imprimirSoma() // Podemos nao passar nenhum valor, mas o seu retorno sera undefined

// Funcao com retorno
function soma(a, b = 8){
    return a + b
}
/* 
Nessa funcao eh retornado uma operacao entre dois valores.
*/
console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // Não vai passar nada mas vai tentar soma os Undefined e gerarah um NaN.


