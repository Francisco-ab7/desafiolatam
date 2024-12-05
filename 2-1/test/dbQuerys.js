const pool = require('./dbConexion')
//obtener usuarios
const getUsers = async () => {
    const {rows} = await pool.query('SELECT * FROM users');
    console.log (rows);
    return rows;
};
module.exports = { getUsers }