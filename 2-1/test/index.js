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

app.get('/',(req,res)=> {
    res.send('OK')
})

app.get('/users',async (req,res)=> {
    try {
        const usersdb = await dbQuerys.getUsers()
        res.json({usersdb})
    }
    catch (error){
        console.log('Error al obtener los datos')
    };
})