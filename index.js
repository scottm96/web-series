//.reduce() = reduce te elements of an array to a single value

const prices = [23, 12, 19, 4, 25]
const total = prices.reduce(sum);

console.log(`total = $${total.toFixed(2)}`)

function sum(previous, next){
    return previous + next
}

const grades = [90, 23, 57, 94, 73];

const max = grades.reduce(getmax)
console.log(max)

function getmax(accumulator, element){
    return Math.max(accumulator,element);
}