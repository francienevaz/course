let express = require('express');
let app = express();
let alunos = require("./Routers/aluno");


app.use(urlencoded())

let hello = (req, res) => {
    res.send("hello world");
}

app.use("/aluno", alunos)

app.get("/", hello)

app.listen(5000, () => console.log("Server rodando na porta 5000..."))