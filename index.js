class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    set breadth(newbreadth){
        if(newbreadth > 0){
            this._breadth = newbreadth;
        }
        else{
            console.error('breadth must be a positive number')
        }
    }

    set length(newlength){
        if(newlength > 0){
            this._length = newlength;
        }
        else{
            console.error('length must be a positive number')
        }
    }

    get length(){
        return this._length;
    }

    get breadth(){
        return this._breadth;
    }

    get area(){
        return this._breadth * this._length;
    }
}

const rectangle = new Rectangle(5,9);



console.log(rectangle.length)
console.log(rectangle.breadth)
console.log(rectangle.area)


class Person{

    constructor(firstname,lastname, age){
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    set firstname(newFirstname){
        if(typeof newFirstname === 'string' && newFirstname.length > 0){
            this._firstname = newFirstname;
        }
        else{
            console.error("first name must be a non empty string ")
        }
    }

    set lastname(newlastname){
        if(typeof newlastname === 'string' && newlastname.length > 0){
            this._lastname = newlastname;
        }
        else{
            console.error("last name must be a non empty string ")
        }
    }

    set age(newAge){
        if(typeof newAge === 'number' && newAge >= 0){
            this._age = newAge;
        }
        else{
            console.error('age must be a non negative number')
        }
    }

    get firstname(){
        return this._firstname;
    }

    get lastname(){
        return this._lastname;
    }

    get age(){
        return this._age;
    }
}

const person = new Person('james', 'kyle', 99);
console.log(person.age)
console.log(person.firstname)
console.log(person.lastname)