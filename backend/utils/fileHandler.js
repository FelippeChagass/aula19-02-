const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '..', 'data', 'users.json');

function saveUser(users){
    fs.writeFileSync(dataPath, JSON.stringify(users, null, 2))
}

function readUsers(){
    const data = fs.readFileSync(dataPath, 'utf-8')
    return JSON.parse(data);
}

module.exports = {
    saveUser, readUsers
}