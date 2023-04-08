const express = require('express');
const path = require('path');

const app = express();

app.use("meusite", express.static(path.join(__dirname, 'client')))

app.get("/", (req, res) => {
    // para setar o header  da página // res.set("Content-Type", "text/html")
    res.type("html");
    res.send("Hello World from GET");
})

const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(`Server Running on Port: ${PORT}`)
});

