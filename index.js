//arrow funtions 



const hello = (name) => console.log(`hello ${name}`)

hello('klee')


setTimeout(() => console.log('hello'), 5000)

const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map((element) => Math.pow(element, 2))
const total = numbers.reduce((accumulator, element) => accumulator + element)
const evennum = numbers.filter((element) => element % 2 === 0)

console.log(evennum)
console.log(squares)
console.log(total)

