//promises

function walkDog(){


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("You walk the Dog")
        }, 2000);
    })
}

function cleanKitchen(){
    

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("You clean the kitchen")
        }, 3000);
    })
}

function takeOutTrash(){


    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("You take out the trash")
    }, 1000);
    })
}

walkDog().then((value) => {console.log(value); return cleanKitchen()})
         .then((value) => {console.log(value); return takeOutTrash()})
         .then((value) => {console.log(value); console.log("you completed all the chores")})