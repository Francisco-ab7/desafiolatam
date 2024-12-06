const express = require('express')
const pool = require('./dbConexion')
const dbQuerys = require('./dbQuerys')
const jwt = require('jsonwebtoken');
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const PORT = 3000
const app = express()
app.listen(PORT,()=> { console.log('Running Server on port ',PORT, ' !!!')})
app.use(express.json())
if(pool){
    console.log('Test de conexion a la DB OK !!!')
}
else { console.log('Error de conexion a la DB !!!')}

//------------------SWAGGER-----------------------------------------
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title:'Api Users',
            version: '1.0.0',
            description: 'Api Documents'
        }
    },
    apis: ['./*.js']
}

//------------------RUTAS-------------------------------------------
//CONSULTAR
app.get('/users',async (req,res)=> {
    try {
        const usersdb = await dbQuerys.getUsers()
        res.json({usersdb})
    }
    catch (error){
        console.log('Error al obtener los datos')
    };
})
//AGREGAR
app.post('/users',authenticateToken, async (req,res)=> {
    try {
        const {name,login,password,email} = req.body;
        const usersdb = await dbQuerys.addUser(name,login,password,email)
        
    }
    catch (error){
        console.log('Error al insertar los datos')
    };
    res.send('Usuario agregado con exito !!!')
})
//BORRAR
app.delete('/users/:id',authenticateToken, async (req,res)=> {
    const { id } = req.params;
    try {
        await dbQuerys.delUser(id);
        res.send('Usuario eliminado con exito !!!');
    }
    catch (error){
        res.send('Error al eliminar usuario');
    };
})
//ACTUALIZAR
app.put('/users/:id',authenticateToken, async (req,res)=> {
    const { id } = req.params;
    const {name} = req.body;
    try {
        await dbQuerys.updateUser(id,name);
        res.send('Usuario actualizado con exito !!!');
    }
    catch (error){
        res.send('Error al actualizar usuario');
    };
})

//LOGIN
app.post('/login', async(req, res) => {
    const { login, password } = req.body;
    try {
        const result = await dbQuerys.findUser(login, password);
        const SECRET_KEY = '123456'; 
        console.log(result.rowCount)
        if (result.rowCount == 1){
            const token = jwt.sign({ login }, SECRET_KEY, { expiresIn: '1h' });
            //console.log('Usuario logeado')
            res.json({ token });
          } else {
            res.status(401).send('Credenciales inválidas');
          }
    }
    catch (error){
        res.send('Error en el login');
    };

  });

//---------------------Middleware de autenticación---------------------------------

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
    console.log('Token verificado para el usuario:');
    next();
  });
}