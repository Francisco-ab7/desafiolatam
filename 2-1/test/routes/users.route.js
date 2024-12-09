const express = require('express')
const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken');
const authenticateToken = require('../routes/login.js')
const dbQuerys = require('../dbQuerys')
const app = require('../index.js');



//------------------RUTAS-------------------------------------------
//CONSULTAR
 /**
 * @openapi
 * /users:
 *  get:
 *   description: Welcome to swagger-jsdoc!
 *   responses:
 *    '200':
 *      description: Returns all users.
 */
router.get('/users',async (req,res)=> {
    try {
        const usersdb = await dbQuerys.getUsers()
        res.status(200).json({usersdb})
    }
    catch (error){
        console.log('Error al obtener los datos')
    };
})
//AGREGAR
router.post('/users',authenticateToken, async (req,res)=> {
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
router.delete('/users/:id',authenticateToken, async (req,res)=> {
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
router.put('/users/:id',authenticateToken, async (req,res)=> {
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
router.post('/login', async(req, res) => {
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

module.exports = router