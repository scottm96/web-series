//number guessing game using js

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min ) + min);

let attempts = 0;
let guess;
let running = true;

while (running){

    guess = window.prompt(`Guess a number between ${min} and ${max}`)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("please enter a  valid number");
    }
    else if(guess < min || guess > max){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low, try again")
        }
        else if (guess > answer){
            window.alert("Too high, try again")
        }
        else{
            window.alert(`Correct! it took you ${attempts} attemps`);
            running = flase
        }
    }
    
}
