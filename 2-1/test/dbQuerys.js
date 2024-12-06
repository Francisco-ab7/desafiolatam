const pool = require('./dbConexion')

const getUsers = async () => {
    const {rows} = await pool.query('SELECT * FROM users');
    return rows;
};

const addUser = async (name,login,password,email) => {
    const queryDb = ('INSERT INTO users VALUES (DEFAULT,$1,$2,$3,$4)')
    const addData = [name,login,password,email]
    const dataInsert = await pool.query(queryDb,addData);
    console.log ('Usuario ', name, ' agregado !!!');   
};

const delUser = async (id) => {
    const queryDb = 'DELETE FROM users WHERE id = $1';
    const values = [id];
    const deldata = await pool.query(queryDb,values);
    console.log ('Usuario eliminado !!!');   
};

const updateUser = async (id,name) => {
    const queryDb = 'UPDATE users SET name = $2 WHERE id = $1'
    const data = [id,name]
    const dataupdate = await pool.query(queryDb,data);
    console.log ('Usuario actualizado !!!');   
};

module.exports = { getUsers, addUser,delUser,updateUser}