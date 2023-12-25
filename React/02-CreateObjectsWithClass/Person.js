class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings(){
        console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
    }
}

module.exports = Person;