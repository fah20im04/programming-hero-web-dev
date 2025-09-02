class Animal {
    constructor(name,age){
        this.name =  name;
        this.age = age;
    }
}

class Dog extends Animal{
    constructor(name,breed,age){
        super(name,age)
        this.breed = breed;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    bark() {
        console.log(`${this.name} is barking`);
    }
}

const doggy = new Dog('coffe','Deshi',3);
console.log(doggy)
doggy.eat()