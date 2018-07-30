const funcs = []
/**
 * O let tem escopo GLOBAL por isso os valores
 * sao passados para o Array
 */
for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()