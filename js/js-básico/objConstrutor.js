function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

const turma = [
    criarAluno("Lucas", 7, 6.5),
    criarAluno("Johnny", 7, 9),
    criarAluno("Milton", 8, 7.5)
]

let aluno = turma[0];

turma.forEach(function (elemento){
    console.log(`${elemento.nome} - média: ${elemento.media()}`);
})