function consultar () {
    let nota1 = document.getElementById('nota1');
    let nota2 = document.getElementById('nota2');
    let soma = Number(nota1.value) + Number(nota2.value);
    let media = soma / 2;
    let res = document.getElementById('answer');
    let conceito = "";

    if (!nota1.value && !nota2.value) {
        res.innerHTML = `Digite um valor válido!`
    } else if (media >= 7) {
        conceito = "suficiente"
    } else if (media < 7) {
        conceito = "Insuficiente"
    }

    switch (conceito) {
        case "Insuficiente":
            res.innerHTML = `Que pena! Sua média atual é ${media}, estude mais da próxima vez!`;
            break;
        case "suficiente":
            res.innerHTML = `Parabéns! Sua média é ${media}, você passou!`;
            break;   
        default:
            res.innerHTML = 'Digite suas notas!';
            break;
    } 
}
