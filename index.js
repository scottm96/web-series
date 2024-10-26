//forEach method


let numbers = [1, 2, 3, 4, 5]


numbers.forEach(square);
numbers.forEach(display);


function display(element){
    console.log(element)
}

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = element ** 2;
}



let fruits = ['apple', 'orange', 'banana'];

fruits.forEach(capitalize)
fruits.forEach(display)

function display(element){
    console.log(element);
}

function toUpper(element, index, array){
    array[index] = element.toUpperCase();
}

function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

