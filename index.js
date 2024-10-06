//method chaining

//no method chaining
/*
let username = window.prompt("Enter your username")

username = username.trim();
let fl = username.charAt(0);
fl = fl.toUpperCase()

let extrac = username.slice(1);
extrac = extrac.toLowerCase()
username = fl + extrac

console.log(username)
*/


//method chaining

let username = window.prompt("Enter your username")

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase()

console.log(username)