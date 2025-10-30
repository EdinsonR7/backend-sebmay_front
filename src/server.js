import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productosRoutes from './routes/productos.js';

dotenv.config();
const app = express();

// ✅ Configuración CORS
const allowedOrigins = [
  'http://localhost:5173', // Front local (Vite)
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // si usas cookies o autenticación
}));

app.use(express.json());

// Ruta base
app.use('/api/productos', productosRoutes);

app.get('/', (req, res) => {
  res.send('✅ Servidor funcionando correctamente');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
