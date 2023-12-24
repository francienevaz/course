const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

// erro estava ocorrendo por causa do endereço, localhost não foi aceito, e faltava criar uma pasta data na pasta raiz

  mongoose.connect('mongodb://127.0.0.1:27017/blog')
  .then((db) => {
    console.log("Conectado a MongoDB")
    console.log(db)
  })
  .catch((error)=> console.error('Erro ao conectar ao MongoDB:', error))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Example app listening on port 3000'))