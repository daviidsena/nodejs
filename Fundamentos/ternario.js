// Ternario
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(2))

// Funcao arrow
const resultadoArrow = nota => {
    nota >= 7 ? 'Aprovado' : 'Reprovado'
}