//promises

function walkDog(){


    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const dogWalked = true

            if(dogWalked){
                resolve("You walk the Dog")
            }
            else{
                reject("You did not wal the dog")
            }
        }, 2000);
    })
}

function cleanKitchen(){
    

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            
            const kitchenCleaned  = false

            if(kitchenCleaned){
                resolve("You clean the kitchen")
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
                resolve("You did not take out the trash")
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