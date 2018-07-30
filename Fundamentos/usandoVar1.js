{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
                // A variavel VAR pode ser vista fora do bloco, pois ela é uma variavel GLOBAL

            }
        }
    }
}
console.log(sera)

function teste() {
    var local = 123

}
teste()
// console.log(local) local is not defined

