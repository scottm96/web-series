//function expression

const hello = function(){
    console.log("hello")
}

hello()

setTimeout(function(){
    console.log('hello')
}, 3000)

const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(function(element){
    return Math.pow(element, 2)
})

const evennums = numbers.filter(function(element){return element % 2 === 0})
const total = numbers.reduce(function(accumulator, element){return accumulator + element })

console.log(total);