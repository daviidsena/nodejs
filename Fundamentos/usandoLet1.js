let numero = 1
{
    let numero = 2 
    /* 
    Let possui escopo de bloco. Quando a variavel 
    não for encontrada dentro desse escopo ele vai 
    verificar no escopo mais externo
    */
    console.log(numero)
}
console.log(numero)