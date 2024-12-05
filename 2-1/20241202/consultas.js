const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'productos',
  allowExitOnIdle: true,
});

const obtenerProductos = async () => {
  const { rows } = await pool.query('SELECT * FROM productos_tecnologia');
  return rows;
};

//Agregar productos
const agregarProducto = async (
  nombre,
  marca,
  categoria,
  precio,
  stock,
  descripcion
) => {
  const consulta =
    'INSERT INTO productos_tecnologia values (DEFAULT, $1, $2, $3, $4, $5, $6)';
  const params = [nombre, marca, categoria, precio, stock, descripcion];
  await pool.query(consulta, params);
  console.log('Producto agregado');
};

const borrarProducto = async (id) => {
  const consulta = 'DELETE FROM productos_tecnologia WHERE id = $1';
  const values = [id];
  const result = await pool.query(consulta, values);
  console.log('Registro eliminado exitosamente');
};

const actualizarProducto = async (id, nombre) => {
  const consulta = `UPDATE productos_tecnologia SET nombre = $1 WHERE id = $2`;
  const params = [nombre, id];
  const result = await pool.query(consulta, params);
  return result.rows;
};

module.exports = {
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  borrarProducto,
};