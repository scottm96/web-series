// arrays = variable holding more than one value

let fruits = ['apple', 'orange', 'banana']


//console.log(fruits[2])
fruits.push('mango');
fruits.unshift("coconut");
//fruits.shift();
numOfFruits = fruits.length

for (i = 0; i < numOfFruits; i++){
    console.log(fruits[i])
}

for (let fruit of fruits){
    console.log(fruit)
}
console.log('')

for (let fruit of fruits.sort()){
    console.log(fruit)
}



/*
fruits.forEach(fruit => {
    console.log(fruit)
});
*/