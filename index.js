//.filter() = creates new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evennum = numbers.filter(isEven)

console.log(evennum)
function isEven(element){
    return element % 2 === 0;
}


const ages = [16, 17, 20, 18, 54];
const adult = ages.filter(isadult)

console.log (adult)
function isadult(element){
    return element >= 18;
}


const words = ['peanut', 'autopsy', 'yarnball', 'kilsyth', 'telegram']
const longs = words.filter(getlongwords)

console.log(longs)

function getlongwords(element){
    return element.length > 6;
}