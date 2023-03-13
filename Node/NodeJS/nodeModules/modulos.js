let plus = require("../nodeModules/soma");
let multiplication = require("../nodeModules/multi");

let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";

if (args[0] == "p"){
    c = plus(a, b);
} else if (args[0] == "m"){
    c = multiplication(a, b)
} else {
    c = "Opção inválida"
}

console.log(c);