//closure 

function outer(){

    let message = 'hello';

    function inner(){
        console.log(message)
    }
}


function counter(){

    let count = 0;


    function increment(){
       
        count++;
        console.log(`count is increased to ${count}`)
    }

    function getcount(){
        return count;

    }

    return {increment, getcount}
}

const counters = counter();

counters.increment();
counters.increment();
counters.increment();
counters.increment();
counters.increment();




function createGame(){

    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`)
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`)
    }

    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore}
}

const game = createGame();

game.increaseScore(8);
game.increaseScore(8);
game.increaseScore(8);

console.log(game.getScore())