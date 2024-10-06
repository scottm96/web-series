//while loop 

//let username = ""
/*
while(username === "" || username === null){
    username = window.prompt("Enter your Name");
}

console.log(`Hello  ${username}`)
*/

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt("Enter your username")
    password = window.prompt("Enter your password")

    if (username === "user1" && password === "pass0"){
        loggedIn = true
        console.log(`Welcome ${username}`)
    }
    else{
        console.log("Invalid credentials")
    }

}
