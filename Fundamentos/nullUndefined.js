let valor // Nao incializada
console.log(valor)

valor = null // Null nao tem valor ou endereco apontado. Sempre use nulo para zerar uma variavel.
console.log(valor)
//console.log(valor.toString()) Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir undefined
console.log(!!produto.preco)
// Tirar um atributo do objeto >> delete produto.preco
console.log(produto)

produto.preco = null // Sem preco
console.log(!!produto.preco)
console.log(produto)