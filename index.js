function car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
    this.drive = function(){console.log(`you drive a ${this.model}`)}
}

const car1 = new car('ford', 'mustang', 2024, 'red');
const car2 = new car('porche', 'cayenne', 2022, 'black');
const car3 = new car('audi', 'a4', 2023, 'pink');
const car4 = new car('honda', 'crv', 2020, 'white');

car4.drive();
car2.drive();
car1.drive();
