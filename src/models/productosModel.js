import { db } from '../db.js';

export const ProductModel = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM productos_servicios');
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query('SELECT * FROM productos_servicios WHERE id = ?', [id]);
    return rows[0];
  },

  async create(data) {
    const { nombre, descripcion, categoria, tipo, precio, stock, proveedor } = data;
    const [result] = await db.query(
      'INSERT INTO productos_servicios (nombre, descripcion, categoria, tipo, precio, stock, proveedor) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [nombre, descripcion, categoria, tipo, precio, stock, proveedor]
    );
    return { id: result.insertId, ...data };
  },

  async update(id, data) {
    const { nombre, descripcion, categoria, tipo, precio, stock, proveedor } = data;
    await db.query(
      'UPDATE productos_servicios SET nombre=?, descripcion=?, categoria=?, tipo=?, precio=?, stock=?, proveedor=? WHERE id=?',
      [nombre, descripcion, categoria, tipo, precio, stock, proveedor, id]
    );
    return { id, ...data };
  },

  async remove(id) {
    await db.query('DELETE FROM productos_servicios WHERE id = ?', [id]);
    return { message: 'Producto eliminado' };
  },
};
