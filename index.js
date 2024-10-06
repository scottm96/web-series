//string slicing

const fullName = "Max Scott"

let firstName = fullName.slice(0,3)
console.log(firstName)

let lastName = fullName.slice(3)
console.log (lastName)

let fname = fullName.slice(0,fullName.indexOf(" "))
console.log(fname)
let lname = fullName.slice(fullName.indexOf(" ") + 1)
console.log(lname)

const email = "voidstiles5000@gmail.com";

let username = email.slice(0, email.indexOf("@"))
console.log (username)