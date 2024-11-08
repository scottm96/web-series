const person = {
    'first name' : 'nigga',
    'last name' : 'X',
    age : 31,
    sayHello : () => console.log('yo nigga x'),
    displayProfile : () => console.log(Object.entries(person))
}

const personx = {
    name: 'spongebob',
    sayHi : function() {console.log(`hi, i am ${this.name}`)},
}

personx.sayHi();

const persony = {
    name: 'patrick',
    favfood: 'pizza',
    eat: function() {console.log(`${this.name} is eating ${this.favfood}`)},
}

persony.eat()