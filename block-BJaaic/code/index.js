// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

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

animalMethods = {
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
function createAnimal(location, numberOfLegs){
    let animalObj = Object.create(animalMethods);
    animalObj.location = location;
    animalObj.numberOfLegs = numberOfLegs;
    return animalObj;
}
let animal = new createAnimal("India",4);

dogMethods = {
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
Object.setPrototypeOf(dogMethods,animalMethods);
function createDog(location, numberOfLegs,name, color){
    let dogObj = createAnimal(location, numberOfLegs)
    Object.setPrototypeOf(dogObj,dogMethods)
    dogObj.name = name;
    dogObj.color = color;
    return dogObj;
}
let dog = new createDog("Canada","4","Shadow","brown");

catMethods = {
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
Object.setPrototypeOf(catMethods,animalMethods);
function createCat(location, numberOfLegs,name, colorOfEyes){
    let catObj = createAnimal(location, numberOfLegs)
    catObj = Object.setPrototypeOf(catObj,catMethods);
    catObj.name = name;
    catObj.colorOfEyes = colorOfEyes;
    return catObj;
}
let cat = new createCat("China","4","Mimi","white");