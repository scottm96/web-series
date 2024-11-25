//errors

try{
    const dividend = Number(window.prompt("Enter a dividend: "));
    const divisor = Number(window.prompt("Enter a divisor: "));


    if(divisor == 0){
        throw new Error("You cannot divide by zero")
    }
    if(isNaN(dividend) || isNaN(divisor)){
        throw new Error("value must be a number")
    }

    const result = dividend / divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log('you have reaced the end of the program')