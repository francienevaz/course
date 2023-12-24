const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
  title: String,
  description: String, 
  url: String,
  click: Number
})

const Link = mongoose.model('Link', linkSchema)

let link = new Link({
  title: "Fran",
  description: 'This is a test for the database',
  url: 'http://www.google.com',
  click: 0
})

link.save().then(doc => {
  console.log(doc)
}).catch(error => { 
  console.log(error)
})

  mongoose.connect('mongodb://127.0.0.1:27017/newLinks')

  let db = mongoose.connection

  db.on("error", console.error.bind(console, "MongoDB connection error:"))
  db.once("open", ()=> {
    console.log("Connected to MongoDB")
  })


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log('Example app listening on port 3000'))