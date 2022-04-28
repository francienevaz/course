function aluno(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function() {
        return (this.nota1 + this.nota2) / 2;
    }
}

let a = new aluno("Luna", 8, 10);
let b = new aluno("Neto", 6, 7);

console.log(a.media());