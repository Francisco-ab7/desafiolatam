const {Pool} = require('pg')
const pool = new Pool ({
host:'192.168.0.19',
database:'testdb',
user:'sa',
password:'1234abcd',
allowExitOnIdle: true
})
if(pool){
    console.log('conexion exitosa')
}
else (console.log('conexion fallo!!!'))

const obtenerUsuarios = async () => {
    //const { rows } = await pool.query('INSERT INTO users (name,login,password,email) VALUES ('user1','user1','1234','user1@test.com');')
    const { rows } = await pool.query('SELECT * FROM users')
    console.log(rows)
    return rows
   }
   obtenerUsuarios()