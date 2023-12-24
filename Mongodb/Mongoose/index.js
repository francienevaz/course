const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

const linkSchema = new mongoose.Schema({
  title:{ type: String, required: true },
  description: String, 
  url: { type: String, required: true },
  click:{ type: Number, default: 0}
})

const Link = mongoose.model('Link', linkSchema)

let link = new Link({
  title: "Github",
  description: 'This is a test for the database',
  url: 'https://github.com/',
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