//destructuring 
 

const colors = ['red', 'green', 'blue', 'white', 'pink'];

const [firstc, secondc, thirdc, ...restc] = colors;

console.log(firstc)
console.log(secondc)
console.log(thirdc)
console.log(restc)


function displayPerson ({firstn, secondn, age, job = 'unemployed'}) {
    console.log(`name: ${firstn} ${secondn}`)
    console.log(`age: ${age}`)
    console.log(`job: ${job}`)
}

const person1 = {
    firstn : 'spongebob',
    secondn : 'squarepants',
    age : 20,
    job : 'frycook'
}

const person2 = {
    firstn : 'patrick',
    secondn : 'star',
    age : 25,
}

const {firstn, secondn, age, job='unemployed'} = person1;

displayPerson(person2)