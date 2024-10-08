//function 
/*
function happyBirthday(username, age){
    console.log("Happy birthday Bae")
    console.log("Happy birthday Bae x2")
    console.log(`Happy birthday dear ${username}`)
    console.log("Happy birthday to you")
    console.log(`you are ${age} years`)

}

happyBirthday("spongebob", '34');
*/

function add(x,y){
    return x + y
}

function subtract(x,y){
    return x - y
}

function multiply(x,y){
    return x * y
}

function isEven(number){
    if(number % 2 === 0){
        console.log(`${number} is even`)
    }
    else{
        console.log(`${number} is not even`)

    }

    return number % 2 === 0 ? "even number" : "odd number"
}

function invalidemail(email){
    if(email.includes("@")){
        console.log("It is a valid email")
    }
    else {
        console.log("It is an  invalid email")
    }
}

isEven(14)
console.log(isEven(23))

invalidemail("yamchips")
invalidemail("yamchips@email.com")
