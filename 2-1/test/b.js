const pool = require('./dbConexion')
const dbQuerys = require('./dbQuerys')
const jwt = require('jsonwebtoken');

const findUser = async (login,password) => {
    const finduser = 'SELECT * FROM users WHERE login = $1 AND password = $2'
    const data = [login, password]
    const result = await pool.query(finduser,data);
    const SECRET_KEY = '123456'; 
    if (result.rowCount == 1){
        const token = jwt.sign({ login }, SECRET_KEY, { expiresIn: '1h' });
        console.log('usuario logeado')
        console.log({ token });
      } else {
        console.log('Credenciales inválidas');
      }
    //console.log (result);   
};

findUser('user1',1234)