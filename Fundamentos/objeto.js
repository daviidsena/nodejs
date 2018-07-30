const prod1 = {}  // Forma literal de criar um objeto.
prod1.nome = 'Celular'
prod1.preco = 4999.90
prod1['Desconto'] = 0.40 // evitar atributos com espaço.
/**
 * Objeto é uma coleção de chave e valor.
 * 
 */
console.log(prod1)
/**
 * Essa forma de declaração não é um JSON.
 * Não confunda o objeto com JSON, essa é uma notação literal do objeto.
 */
const prod2 = {
    nome: 'Camisa',
    preco: 79.90,
    obj: {
        teste:123,
    }
}
console.log(prod2)

/**
 * Forma correta do JSON. 
 * O JSON não é a mesma coisa que o objeto, ele é um formato textual.
 */
//{
//	"nome": "Camisa",
//	"preco": "79.90"
//}
