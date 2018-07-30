let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

/* 
Para saber se o valor é verdadeiro ou falso, usamos a negação (!)
antes da variavel. 1 - true | 0 - false
*/
isAtivo = 1
console.log(!isAtivo)

console.log('Os tipos verdadeiros...')
console.log(!!3)    // Valor positivo
console.log(!!-1)   // Valor negativo
console.log(!!' ')  // Qualquer palavra ou frase.
console.log(!![])   // Array é considerado verdadeiro.
console.log(!!{})   // Objeto literal também é verdadeiro.
console.log(!!Infinity) // Tipo infinito.
console.log(!!(isAtivo = true)) // Se o valor for resolvido o resultado será verdadeiro.
console.log(!!(isAtivo = Infinity))

console.log('Os tipos falsos...')
console.log(!!0)    // o Zero é falso.
console.log(!!-0)   // o Zero negatico é falso.
console.log(!!'')   //String vazia retorna falso
console.log(!!null) // Valor nulo ou vazio
console.log(!!NaN)  // NaN é não é numero.
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))


// Caso usemos strings em statements, o valor retornado será o que for verdadeiro.
let nome = ''
console.log(nome || 'Desconhecido')


