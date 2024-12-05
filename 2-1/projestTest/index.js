const express = require('express')
const jwt = require('jsonwebtoken')
const app = express()
const fs = require('fs')
app.listen(3000,console.log('Servicio Activo !!!'))

//Rutas

app.get('/',(req,res)=> {
    res.send('Bienvenido !!!')
} )

app.get('/products',(req,res)=> {
    const result = JSON.parse(fs.readFileSync('productos.json'))
    res.send(result)
} )
const users = []
app.post('/register',(req,res)=> {
    const username = req.body;
    const password = req.body;
    users.push({username,password})
    res.status(201).send('Usuario registrado !!!');
})

const SECRET_KEY = '123456'
app.post('/login',(req,res)=> {
    const username = req.body;
    const password = req.body;
    const user = users.find(u => u.name === username && u.password === password)
    if(user){
        const token = jwt.sign({username},SECRET_KEY,{expiresIn: '1h'})
        res.json({token})
    }
    else {
        res.status(401).send('Error de autenticacion !!!')
    }
})