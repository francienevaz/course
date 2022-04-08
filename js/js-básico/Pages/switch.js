let nota1 = 10;
let nota2 = 5;

let media = (nota1 + nota2) / 2;
let conceito = "";

if (media < 7) {
    conceito = "Insuficiente"
} else if (media >= 7) {
    conceito = "suficiente"
}

switch (conceito) {
    case "Insuficiente":
        console.log(`Que pena! Sua média atual é ${media}, estude mais da próxima vez!`)
        break;
    case "suficiente":
        console.log(`Parabéns! Sua média é ${media}, você passou!`) 
        break;   
    default:
        console.log('Digite suas notas!')
        break;
}