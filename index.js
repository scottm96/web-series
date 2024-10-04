//random number generator


let roll = document.getElementById("mybutton")
let label1 = document.getElementById("label1")
let label2 = document.getElementById("label2")
let label3 = document.getElementById("label3")
const min = 1;
const max = 6;

roll.onclick = function(){
    result1 = Math.floor(Math.random() * max) +1
    result2 = Math.floor(Math.random() * max) +1
    result3 = Math.floor(Math.random() * max) +1
    label1.textContent = result1;
    label2.textContent = result2;
    label3.textContent = result3;
}

