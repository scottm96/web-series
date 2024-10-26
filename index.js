//callbacks - a function that is passed as an 
//            argument to another function to guarantee 
//           the function is called only after the main fuction has been executed


sum(displyPage, 3, 4)

function sum(callback, x,y){
    let result = x + y;
    callback(result);
}

function displayconsole(result){
    console.log(result)
}

function displyPage(result){
    document.getElementById("myh1").textContent = result
}