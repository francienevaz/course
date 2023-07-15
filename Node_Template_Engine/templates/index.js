const express = require('express');
const fs = require('fs');
const app = express();

let user = {
    id: 0,
    name: "Francielle", 
    phone: "(222) 234-1987",
}

app.get("/", (req, res) => {

function render (data, obj) {

    for( let key in obj) {
        data = data.replace(`{{{${key}}}}`, obj[key])

        return data
    }
}    
    
    
    // Dessa forma lemos um arquivo HTML sem usar um template engine
    fs.readFile("./user.html", "UTF-8", (err, data) => {
        if(!err) {

            // data = data.replace("{{Nome}}", user.name)
            // data = data.replace("{{Telefone}}", user.phone)
            // res.send(data)

            res.send(render(data, user));
        }
    })

})

app.listen(3000, () => {
    console.log("Server running on 3000")
})