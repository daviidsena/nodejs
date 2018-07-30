/**
 * O Array é indexado e heterogenea.
 */
const valores = [1.7,2.2,4.3,4.9] // Declaracao de forma literal.
console.log(valores[1], valores[3])

/*
Em outras linguagem ocorreria um erro, mas aqui o valor será indefinido.
*/
console.log(valores[4]) 
valores[10] = 10

/*
Quando determinados indices do array estiverem vazios
será retornado um valor empty(vazio).
*/
console.log(valores)
console.log(valores.length)

/*
Não é recomendado que façamos o uso do array com varios tipos.
 */
valores.push({id: 3}, false, null, 'teste')

/*
O push insere novos dados no array.
*/
console.log(valores)

/*
As formas de excluir os valores do array.
*/
console.log(valores.pop() + " <- removido!!")

/*
O pop remove o ultimo valor do array.
*/
delete valores[1]
console.log(valores)
console.log(typeof valores)