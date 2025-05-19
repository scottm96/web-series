//JS Object Notation stringify and parse

const names = ["squidward", "king", "chuck", "patrick"]

const jsonString = JSON.stringify(names)

console.log(jsonString)



const people = [{
    "name" : "squidward",
    "age" : 36,
    "isEmployed" : true
},
{
    "name" : "patrick",
    "age" : 29,
    "isEmployed" : false
},
{
    "name" : "king",
    "age" : 36,
    "isEmployed" : true
}]

const jsonPeople = JSON.stringify(people)

console.log(jsonPeople)
console.log(typeof(jsonPeople))


console.log(JSON.parse(jsonPeople))
console.log(typeof(JSON.parse(jsonPeople)))