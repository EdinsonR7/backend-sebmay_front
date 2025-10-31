# 🧩 SebMay — Backend (API REST con Node.js, Express y PostgreSQL)

Este proyecto corresponde al **backend** del sistema **SebMay — Gestión de Productos / Servicios**, desarrollado como parte del proceso de evidencia del componente formativo *“Frameworks para construcción de aplicaciones con JavaScript”*.  
El objetivo de esta API es gestionar productos y servicios conectándose a una base de datos PostgreSQL.

---

## 🚀 Tecnologías utilizadas

- **Node.js** — Entorno de ejecución de JavaScript.  
- **Express.js** — Framework minimalista para crear APIs REST.  
- **PostgreSQL** — Sistema de base de datos relacional.  
- **CORS** — Middleware para permitir peticiones desde el frontend.  
- **dotenv** — Manejo de variables de entorno.  

---

## ⚙️ Instalación y configuración

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

    ```bash
    # 1️⃣ Clonar el repositorio
    git clone https://github.com/EdinsonR7/backend-sebmay_front.git

    # 2️⃣ Entrar a la carpeta del proyecto
    cd backend-sebmay_front

    # 3️⃣ Instalar dependencias
    npm install

    # 4️⃣ Iniciar el servidor de desarrollo
     npm run dev

Crea un archivo .env en la raíz del proyecto con este contenido:

    ```bash
    PORT=4000
    PGHOST=localhost
    PGUSER=tu-usuario
    PGPASSWORD=Tu_contraseña
    PGDATABASE=sebmay_db
    PGPORT=5432

Crea tu base de datos llamada sebmay_db despues levanta el servidor y has la conexion con tu base de datos.
    




