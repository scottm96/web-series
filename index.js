//temperature conversion 

const textbox = document.getElementById("textbox");
const tocelcius = document.getElementById("tocelcius");
const tofarenheit = document.getElementById("tofarenheit");
const result = document.getElementById("result");
let temp;

function convert(){

    if(tofarenheit.checked){
        temp = Number(textbox.value);
        temp = temp * (9/5) + 32
        result.textContent = temp.toFixed(1) + ' degree F'
    }
    else if(tocelcius.checked){
        temp = Number(textbox.value);
        temp = (temp -32) * (9/5) 
        result.textContent = temp + ' degree C'
    }
    else{
        result.textContent = "Select a unit of conversion"
    }
}

