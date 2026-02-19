const express = require('express')
const app = express()
const PORT = 3000
const { saveUser, readUsers} = require('./utils/fileHandler')

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando em htttp://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    console.log('Você acessou a página inicial')
    res.json('Você acessou a página inicial')
}) 

app.get('/listar_usuarios', (req, res) => {
    const usuarios = readUsers();
    res.json(usuarios)
})





