let express = require('express');
let app = express();
let bodyParser = require('body-parser');


let alunos = [
    {id: 0, nome: 'Marcos'},
    {id: 1, nome: 'Bruna'},
    {id: 2, nome: 'Raphaella'},
    {id: 3, nome: 'Vinícius'}   
]

let hello = (req, res) => {
    res.send("hello world");
}


app.use(bodyParser.urlencoded())
// urlencoded serve para ler dados enviados por formulários, senhas, emails, etc

// Rotas 👇🏻👇🏻
app.get("/", hello)
app.get("/alunos", (req, res) => {
    res.json(JSON.stringify(alunos))
})
app.get("/aluno", (req, res) => {
    console.log(req.body) // Só é possível por que estamos usando o bodyParser
    let aluno = alunos[req.body.id]
    res.json(aluno);
})


app.listen(3000, () => console.log("Server rodando na porta 3000..."))

//Nota: ​Atualmente o express tem "o seu próprio body-parser". Então você não precisa mais instalar/importar o body-parser e pode usar express.urlencoded() e express.json() no lugar de bodyParser.urlencoded() e bodyParse.json() 