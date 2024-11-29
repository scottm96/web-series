//calculator application

const display = document.getElementById('display')
display.value = '0'

function appendToDisplay(input){
    if(display.value == '0'){
        display.value = input;
    }
    else{
        display.value += input;
    }
}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "error"
    }
}