const express = require('express')
const pool = require('./dbConexion')
const dbQuerys = require('./dbQuerys')
const PORT = 3000
const app = express()
app.listen(PORT,()=> { console.log('Running Server on port ',PORT, ' !!!')})
app.use(express.json())
if(pool){
    console.log('Test de conexion a la DB OK !!!')
}
else { console.log('Error de conexion a la DB !!!')}

app.get('/users',async (req,res)=> {
    try {
        const usersdb = await dbQuerys.getUsers()
        res.json({usersdb})
    }
    catch (error){
        console.log('Error al obtener los datos')
    };
})

app.post('/users',async (req,res)=> {
    try {
        const {name,login,password,email} = req.body;
        const usersdb = await dbQuerys.addUser(name,login,password,email)
        
    }
    catch (error){
        console.log('Error al insertar los datos')
    };
    res.send('Usuario agregado con exito !!!')
})

app.delete('/users/:id', async (req,res)=> {
    const { id } = req.params;
    try {
        await dbQuerys.delUser(id);
        res.send('Usuario eliminado con exito !!!');
    }
    catch (error){
        res.send('Error al eliminar usuario');
    };
})

app.put('/users/:id', async (req,res)=> {
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