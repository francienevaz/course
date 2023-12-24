const PORT = 3000;
const express = require('express');
const apiRoute = require("./routes/api")
const path = require("path")

const app = express();

// Para garantir que uma chamada a api não busque por uma pasta chamada api, devemos chamar a rota da api primeiro.
app.use("/api", apiRoute);// essa linha deve ser chamada primeiro
app.use(express.static(path.join(__dirname, "public"))); // é assim que se integra o front com o back 😁😁, usando rotas, fazendo a requisição do path que já é um modulo do node.


app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})
