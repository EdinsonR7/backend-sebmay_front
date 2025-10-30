import { pool } from '../db.js';

// Obtener todos los productos
export const getProductos = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM productos_servicios ORDER BY id ASC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Error obteniendo los productos' });
  }
};

// Crear un producto
export const crearProducto = async (req, res) => {
  const { nombre, descripcion, categoria, tipo, precio, stock, proveedor } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO productos_servicios (nombre, descripcion, categoria, tipo, precio, stock, proveedor)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [nombre, descripcion, categoria, tipo, precio, stock, proveedor]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error creando el producto' });
  }
};

//consultar por id
export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM productos_servicios WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Actualizar producto
export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, categoria, tipo, precio, stock, proveedor } = req.body;
  try {
    const result = await pool.query(
      `UPDATE productos_servicios
       SET nombre=$1, descripcion=$2, categoria=$3, tipo=$4, precio=$5, stock=$6, proveedor=$7
       WHERE id=$8 RETURNING *`,
      [nombre, descripcion, categoria, tipo, precio, stock, proveedor, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error actualizando el producto' });
  }
};

// Eliminar producto
export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM productos_servicios WHERE id=$1', [id]);
    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error eliminando el producto' });
  }
};
