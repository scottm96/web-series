/* Accepting user input using the window prompt
let usernmae;

username = window.prompt("What is your username")

console.log(`your username is ${username}`)

*/
let username
document.getElementById("submit").onclick = function(){
    username = document.getElementById("mytext").value;
    document.getElementById("greeting").textContent = `Welcome ${username}`
}