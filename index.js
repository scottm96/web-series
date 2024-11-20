//setTimeout


let timeoutID;


function startRepeat(){
   timeoutID = setInterval(() => window.alert(), 3000)
   console.log('started')
}

function endRepeat(){
    clearInterval(timeoutID)
    console.log('stopped')
}