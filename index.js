class Person{

    constructor(name, age, ...address ){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}




class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person('spongebob', 23, '124 yele lane',
                                             'mamprobi', 
                                             'greece')

console.log(person1.address.street)