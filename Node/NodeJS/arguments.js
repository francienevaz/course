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


function plus (x , y) {
    return x + y;
}

function multiplication (x , y) {
    return x * y;
}

console.log(c);

// let args = process.argv.slice(2);

// let a = Number(args[0]);
// let b = Number(args[1]);
// let c = soma(a, b);

// function soma (x , y) {
//     return x + y;
// }

// console.log(c);