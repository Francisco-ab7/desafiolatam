const express = require('express')
const pool = require('./dbConexion')
const dbQuerys = require('./dbQuerys')
const fs = require('fs');
const jwt = require('jsonwebtoken');

const PORT = 3000
const app = express()
app.listen(PORT,()=> { console.log('Running Server on port ',PORT, ' !!!')})
app.use(express.json())
if(pool){
    console.log('Test de conexion a la DB OK !!!')
}
else { console.log('Error de conexion a la DB !!!')}

//-----------MIDDLEWARE

const SECRET_KEY = process.env.SECRET_KEY || '123456';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) {
    console.log('Token no proporcionado ');
    return res.sendStatus(401);
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      console.log('Error de verificación de token:', err.message);
      return res.sendStatus(403);
    }
    req.user = user;
    console.log('Token verificado para el usuario:', user.username);
    next();
  });
}

//LOGIN
app.post('/login', async(req, res) => {
    const { login, password } = req.body;
    try {
        const result = await dbQuerys.findUser(login, password);
        const SECRET_KEY = '123456'; 
        if (result.rowCount == 1){
            const token = jwt.sign({ login }, SECRET_KEY, { expiresIn: '1h' });
            console.log('usuario logeado')
            res.send({ token });
          } else {
            console.log('Credenciales inválidas');
          }
        res.send('Usuario encontrado!!!');
    }
    catch (error){
        res.send('Error al actualizar usuario');
    };

  });

