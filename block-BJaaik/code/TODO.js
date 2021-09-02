// ## Create Class

// Convert the give image into class using inheritance.

// - `name` is the property
// - `eat()` is the method

// Property ending with `()` is method. And others are properties.

// ![Inheritance](../assets/inheritance.png)

class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender= gender;
    }
    eat(){
        console.log(`eat`)
    }
    sleep(){
        console.log(`sleep`)
    }
    walk(){
        console.log(`walk`)
    }
}
class Player extends Person{
    constructor(name,age,gender,sportName){
        super(name,age,gender)
        this.sportName =sportName;
    }
    play(){
        console.log(`play`);
    }
}

class Cricketer extends Player{
    constructor(name,age,gender,sportName,teamName){
        super(name,age,gender,sportName)
        this.teamName =teamName;
    }
    playCricket(){
        console.log(`playCricket`);
    }
}

class Teacher extends Person{
    constructor(name,age,gender,instituteName){
        super(name,age,gender)
        this.instituteName =instituteName;
    }
    teach(){
        console.log(`teach`);
    }
}
class Artist extends Person{
    constructor(name,age,gender,kind){
        super(name,age,gender)
        this.kind =kind;
    }
    createArt(){
        console.log(`createArt`);
    }
}
let artist = new Artist("anuj",30,"Male","photography");
let player = new Cricketer("rohit",28,"Male","Cricket","India")

