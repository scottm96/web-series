/*async/await - async allows asynchronous code to work in a synchronous manner
                await makes an async function await a promise*/

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

async function doChores(){

    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult)

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult)

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult)
    } 
    catch(error){
        console.error(error)
    }
    
}


doChores();