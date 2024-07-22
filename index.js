require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World from hassan!')
})
app.get('/twitter', (req, res) => {
    res.send('naqvihassan01');
})

app.get('/login', (req,res) =>{
    res.send('<h1>Please login here</h1>')
})

app.get('/youtube', (req,res) =>{
    res.send('<h2>Chai wala yt best</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})