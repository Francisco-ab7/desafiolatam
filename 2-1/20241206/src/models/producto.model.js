const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "140114",
  database: "productos",
  allowExitOnIdle: true,
});

//Obtener productos
const obtenerProductos = async () => {
  const { rows } = await pool.query(
    "SELECT * FROM productos_tecnologia ORDER BY id ASC"
  );
  return rows;
};

// //Agregar productos
const agregarProducto = async (
  nombre,
  marca,
  categoria,
  precio,
  stock,
  descripcion
) => {
  const consulta =
    "INSERT INTO productos_tecnologia values (DEFAULT, $1, $2, $3, $4, $5, $6)";
  const values = [nombre, marca, categoria, precio, stock, descripcion];
  const result = await pool.query(consulta, values);
};

//Actualizar registro
const actualizarProducto = async (id, nombre) => {
  const result = await pool.query(
    "UPDATE productos_tecnologia SET nombre = $1 WHERE id = $2",
    [nombre, id]
  );
  return result.rows;
};

//Borrar registro
const borrarProducto = async (id) => {
  const consulta = "DELETE FROM productos_tecnologia WHERE id = $1";
  const values = [id];
  const result = await pool.query(consulta, values);
};

//Obtener producto mediante ID
const obtenerProducto = async (id) => {
  try {
    const client = await pool.connect();
    const { rows } = await client.query(
      "SELECT * FROM productos_tecnologia WHERE id = $1",
      [id]
    );
    client.release();
    return rows[0];
  } catch (err) {
    console.error("Error al obtener el producto:", err);
    throw err;
  }
};

module.exports = {
  obtenerProductos,
  agregarProducto,
  actualizarProducto,
  borrarProducto,
  obtenerProducto,
};
