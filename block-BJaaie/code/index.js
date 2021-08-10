// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

CreateAnimal.prototype = {
    eat: function(){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function (newLocation){
        this.location = newLocation
        return this.location;
    },
    summary: function(){
        returns `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}
function CreateAnimal(location, numberOfLegs){
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}
let animal = new CreateAnimal("India",4);

CreateDog.prototype = {
    bark: function(){
        alert(`I am ${this.name} and I can bark`)
    },
    changeName: function (name){
        this.name = name
        return this.name
    },
    changeColor:function(color){
        this.color = color;
        return this.color;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

function CreateDog(location, numberOfLegs,name, color){
    CreateAnimal.call(this,location, numberOfLegs)
    this.name = name;
    this.color = color;
}
Object.setPrototypeOf(CreateDog.prototype,CreateAnimal.prototype);
let dog = new CreateDog("Canada","4","Shadow","brown");

CreateCat.prototype = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow`)
    },
    changeName: function (newName){
        this.name = newName;
        return this.name
    },
    changeColorOfEyes:function(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes
    },
    summary: function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

function CreateCat(location, numberOfLegs,name, colorOfEyes){
    CreateAnimal.call(this,location, numberOfLegs)
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}
Object.setPrototypeOf(CreateCat.prototype,CreateAnimal.prototype);
let cat = new CreateCat("China","4","Mimi","white");


//Class approach
class Animal{
    constructor(location, numberOfLegs){
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat(){
        console.log(`I live in ${this.location} and I can eat`)
    }
    changeLocation(newLocation){
        this.location = newLocation
        return this.location;
    }
    summary(){
        returns `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}
class Dog extends Animal{

    constructor(location, numberOfLegs,name, color){
        super(location, numberOfLegs)
        this.name = name;
        this.color = color;
    }
    bark(){
        alert(`I am ${this.name} and I can bark`);
    }
    changeName (name){
        this.name = name
        return this.name
    }
    changeColor(color){
        this.color = color;
        return this.color;
    }
    summary(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }
}

let dog1 = new Dog("Usa",4,"chiku","brown");

class Cat extends Animal{

    constructor(location, numberOfLegs,name, colorOfEyes){
        super(location, numberOfLegs)
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow(){
        alert(`I am ${this.name} and I can do mewo meow`)
    }
    changeName (newName){
        this.name = newName;
        return this.name
    }
    changeColorOfEyes(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes
    }
    summary(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }
}

let cat1 = new Cat("punjab",4,"miki","black");