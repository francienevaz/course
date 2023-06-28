let express = require('express');
let app = express();
let bodyParse = require("body-parser");
const bodyParser = require('body-parser');


//Uma das características do Middleware é que ele tem como parâmetro a requisição, a resposta e o next... o next quando passado um parâmetro retorna uma mensagem de erro, definida pelo programador
let consoleBody = (req, res, next) => {
    console.log(req.body);
    next()
}
// ☝🏻☝🏻 exemplo de middleware

let hello = (req, res) => {
    res.send("hello world");
}
app.use("/", bodyParser.json()) //através do bodyParser conseguimos ver no console o conteúdo que estiver no Body
app.use("/", consoleBody) // o use responde a qualquer tipo de método (get, post, delete, update)
app.get("/", hello)
app.post("/", hello)

app.listen(3000, () => console.log("Server rodando na porta 3000..."))

