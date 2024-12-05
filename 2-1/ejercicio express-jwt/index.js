const express = require('express');
const app = express();
const fs = require('fs');
const jwt = require('jsonwebtoken');


app.use(express.json());

//-------------------------------------------------------------------------------------
// Middleware de autenticación
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
//-------------------------------------------------------------------------------------
const port = process.env.DEFAULT_PORT || 3000;
app.listen(port, console.log('Servidor activo, puerto', port));
app.get('/', (req, res) => {
  res.send('Hello!, run with express');
});

const users = [];

// Ruta para registrarse
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  users.push({ username, password });
  console.log(users);
  res.status(201).send('Usuario registrado');
});

// Ruta para el login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  if (user) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciales inválidas');
  }
});

app.get('/productos', authenticateToken, (req, res) => {
  const productos = JSON.parse(fs.readFileSync('./data/productos.json'));
  res.json(productos);
});
