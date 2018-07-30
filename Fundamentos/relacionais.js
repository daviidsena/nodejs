console.log('01)',  '1' == 1)
console.log('02)',  '1'=== 1)
console.log('03)',   1 === 1)
console.log('04)',  '3' != 3)
console.log('05)', '3' !== 3)


const d1 = new Date(0)
const d2 = new Date(0)
console.log('06)', d1 === d2) // Neste caso ele compara o endereco de memoria
console.log('07)', d1 == d2) 
console.log('08)', d1.getTime() === d2.getTime())

console.log('09)', undefined == null)
console.log('10)', undefined === null)
/**
 * O estritamente igual que é === leva em consideracao o valor
 * e o tipo da variavel.
 */