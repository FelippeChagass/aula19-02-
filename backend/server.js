const express = require('express')
const app = express()
const PORT = 3000
const { saveUser, readUsers} = require('./utils/fileHandler')

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

app.get('/', (req, res) => {
    console.log('Você acessou a página inicial')
    res.json('Você acessou a página inicial')
});

app.get('/listar_usuarios', (req, res) => {
    try {
        const usuarios = readUsers();
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao ler usuários:', error);
        res.status(500).json({ erro: 'Erro ao ler usuários' });
    }
});

app.get('/listar_usuario/:id', (req, res) => {
    try {
        const id_usuario = parseInt(req.params.id);
        
        if (isNaN(id_usuario)) {
            return res.status(400).json({ erro: 'ID inválido' });
        }
        
        const lista_usuarios = readUsers();
        const usuario = lista_usuarios.find(u => u.id === id_usuario);
        
        if (!usuario) {
            return res.status(404).json({ erro: 'Usuário não encontrado' });
        }
        
        res.json(usuario);
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).json({ erro: 'Erro ao buscar usuário' });
    }
});




