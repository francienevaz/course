// O node express é um framework que serve para usarmos as rotas no nosso projeto, fazer as requisições com get/post/upgrade/delete

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

let users = [
    {   
        id: 0,
        name: "Johnny Deep", 
        phone: "(333) 21548758"
    },
    {
        id: 1,
        name: "Lisa Wood", 
        phone: "(333) 21548758"
    },
    {   
        id: 2,
        name: "Wesnesday Adams", 
        phone: "(333) 21548758"
    }
]

app.set('views', path.join(__dirname, 'views')); // "views é a chave que estamos setando para que o ejs encontre o caminho da página que queremos renderizar "
app.set('view engine', 'ejs');

app.get("/", (req, res) => {

    res.render('user', {users});

});

app.get("./about", (req, res) => {

    res.render("about");

})


app.listen(3000, () => {
    console.log("Server Running on 3000")
});