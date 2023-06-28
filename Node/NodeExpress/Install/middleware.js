let express = require('express');
let app = express();

let consoleMethod = (req, res, next) => {
    console.log(req.method);
    next()
}

let hello = (req, res) => {
    res.send("hello world");
}

app.use("/", consoleMethod) // o use responde a qualquer tipo de método (get, post, delete, update)
app.get("/", hello)
app.post("/", hello)

app.listen(3000, () => console.log("Server rodando na porta 3000..."))

