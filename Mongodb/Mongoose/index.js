const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

  mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error)=> console.error('Erro ao conectar ao MongoDB:', error))

//{
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Conexão bem-sucedida ao MongoDB');
//     // Faça operações após a conexão ser estabelecida
//   })
//   .catch((error) => {
//     console.error('Erro ao conectar ao MongoDB:', error);
//   });


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, ()=> console.log('Example app listening on port 3000'))