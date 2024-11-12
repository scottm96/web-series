//inheritance

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }

    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class Rabbit extends Animal{
    name = 'rabbit';
    run(){
        console.log(`This ${this.name}  is running`)
    }
}
class Fish extends Animal{
    name = 'fish';
    swim(){
        console.log(`This ${this.name}  is swimming`)
    }
}
class Hawk extends Animal{
    name = 'rabbit';
    fly(){
        console.log(`This ${this.name}  is flying`)
    }
}


const rabbit = new Rabbit();

rabbit.sleep()