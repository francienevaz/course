let nota1 = document.getElementById('nota1');
let nota2 = document.getElementById('nota2');
let media = (nota1.value + nota2.value) / 2;
let conceito = "";

function consultar () {
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
}
