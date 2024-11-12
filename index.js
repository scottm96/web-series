//super

class Animal{
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed = runspeed
    }
}

class Fish extends Animal{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed
    }
}

class Hawk extends Animal{
    constructor(name, age, flyspeed){
        super(name, age);
        this.flyspeed = flyspeed
    }
}

const rabbit = new Rabbit('rabbit', 3, 24)
const fish = new Fish('fish', 3, 12)
const hawk = new Hawk('rabbit', 3, 54)


console.log(fish.flyspeed)