//promises

function walkDog(){


    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true

            if(dogWalked){
                resolve("You walked the Dog")
            }
            else{
                reject("You did not walk the dog")
            }
        }, 2000);
    })
}

function cleanKitchen(){
    

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            
            const kitchenCleaned  = false

            if(kitchenCleaned){
                resolve("You cleaned the kitchen")
            }
            else{
                reject("You did not clean the kitchen")
            }
            
        }, 3000);
    })
}

function takeOutTrash(){


    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const trashTakenOut = true;

            if(trashTakenOut){
                resolve("You took out the trash")
            }
            else{
                reject("You did not take out the trash")
            }
        }, 1000);
        
    })
}

walkDog().then((value) => {console.log(value); return cleanKitchen()})
         .then((value) => {console.log(value); return takeOutTrash()})
         .then((value) => {console.log(value); console.log("you completed all the chores")})
         .catch((error) => console.error(error))