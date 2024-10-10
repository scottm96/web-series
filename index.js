// rest parameters = opposite of spread operator but as a function

const food1 = 'pizza'
const food2 = 'rice'
const food3 = 'yam'

function openfridge(...foods){
    console.log(foods);
}

function sum(...numbers){
    let result = 0;
    for (let num of numbers){
        result += num;
    }
    return result
}

function getaverage(...numbers){
    result = 0;
    for(let num of numbers){
        result += num
    }
    return result/numbers.length;
}

const total = getaverage(55,23,16,23)
console.log(total)


function combinestr(...string){
   /* let chain = ""
    for(let str of string){
        chain += str
    }
    return chain
    */

    return string.join("")

}

const fullname = combinestr("max " , "scott ", "devon")
console.log(fullname)