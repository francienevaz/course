const Person = require("./Person")

class Alumn extends Person {
    constructor(name, age, turma) {
        super(name, age);
        this.turma = turma;
    }

    greetings(){
        console.log(`Olá, eu sou ${this.name}, tenho ${this.age} e estou na turma ${this.turma}`)
    }

}

module.exports = Alumn;