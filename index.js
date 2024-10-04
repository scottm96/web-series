//If statements

const input = document.getElementById("age");
const submit = document.getElementById("submit");
const result = document.getElementById("result");


submit.onclick = function(){
    let age = input.value;
    age = Number(age)

    if (age >= 100){
        result.textContent = "you are too old to enter this site"
    }
    else if (age == 0){
        result.textContent = "you were just born "
        
    }
    else if (age >= 18){
        result.textContent = "you are old enough to enter this site"
        
    }
    else if (age < 0){
        result.textContent = "your age cannot be less than 0"
        
    }
    else{
        result.textContent = "you're not old enough to enter this site"
        
    }
}

