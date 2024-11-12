//super

class Animal{
    constructor(name, age){
        this.name = name; 
        this.age = age;
    }

    move(speed){
        console.log(`This ${this.name} moves at a speed of ${speed}mph`)
    }
}

class Rabbit extends Animal{
    constructor(name, age, runspeed){
        super(name, age);
        this.runspeed = runspeed
    }

    run(){
        console.log(`this ${this.name} can run`)
        super.move(this.runspeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimspeed){
        super(name, age);
        this.swimspeed = swimspeed
    }
    swim(){
        console.log(`this ${this.name} can swim`)
        super.move(this.swimspeed);
    }
}

class Hawk extends Animal{
    constructor(name, age, flyspeed){
        super(name, age);
        this.flyspeed = flyspeed
    }

    fly(){
        console.log(`this ${this.name} can run`)
        super.move(this.swimspeed);
    }
}

const rabbit = new Rabbit('rabbit', 3, 24)
const fish = new Fish('fish', 3, 12)
const hawk = new Hawk('rabbit', 3, 54)


console.log(fish.flyspeed)
fish.swim()