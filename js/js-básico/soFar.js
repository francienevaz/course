// Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado

var nomes = ["Cauê", "Romulo", "Matheus", "William"];
var notasA = [7.0, 6.5, 8.2, 9.5];
var notasB = [6.5, 8, 7, 5.5];

function media(n1, n2) {
    
    return (n1 + n2)/2
}

function passou (media) {

    let resultado = "Reprovado";

    if (media > 7) {
        resultado = "Aprovado";
    }
    return resultado;
}

for (var index in nomes) {
    let alunos = nomes[index];
    let nota1 = notasA[index];
    let nota2 = notasB[index];
    let m = media(nota1, nota2);
    
    console.log(`${alunos} - ${nota1} - ${nota2} - ${m} - ${passou(m)}`);
}