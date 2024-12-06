const pool = require('./dbConexion')

const delUser = async (login) => {
    const queryDb = 'DELETE FROM users WHERE login = $1';
    const data = [login];
    const deldata = await pool.query(queryDb,data);
    console.log ('Usuario eliminado !!!',login);   
};
const a = delUser('user6')
console.log(a)