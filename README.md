Proyecto Jump Consultorías – API

Este proyecto es una API REST para gestionar usuarios, profesionales, roles, servicios y reservas del sistema Jump Consultorías.

Requisitos previos

Antes de iniciar el servidor, asegúrate de tener instalado:

Node.js
 (versión 18 o superior recomendada)

MongoDB
 (puede ser local o en la nube con MongoDB Atlas)

Postman
 (opcional, para probar los endpoints)
 
 **Instalación y configuración

1- Clona este repositorio:

git clone https://github.com/alebe16/jump-consultorias-backend-300h
cd tu-repositorio

2- Instala las dependencias:

npm install

3- Crea un archivo .env en la raíz del proyecto y agrega la configuración necesaria:

PORT=3000
MONGO_URI=mongodb://localhost:27017/jump_consultorias

**Iniciar el servidor

1- Para iniciar el servidor en modo desarrollo con nodemon:

npm run dev

modo producción:

npm start

El servidor se levantará en:

http://localhost:3000


**Endpoints principales

Usuarios > /api/users

Roles > /api/roles

Profesionales > /api/profesionales

Servicios > /api/servicios

Reservas > /api/reservas
