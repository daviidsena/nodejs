const funcs = []
/**
 * Com o var o escopo do codigo deixara
 * a variavel restrita apenas ao loop.
 */
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()