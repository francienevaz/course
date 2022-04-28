function calcMedia () {
    return (this.notas[0] + this.notas[1]) / 2;
}

const aluno = {
    nome: "Lucas",
    notas: [9,7],

    media: calcMedia
}

const aluno1 = {
    nome: "Luana",
    notas: [6,7],

    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());



