# Proyecto Final - Adoptme

Este proyecto es una aplicación desarrollada en JavaScript que utiliza una base de datos MongoDB para su funcionamiento. A continuación, encontrarás las instrucciones detalladas para configurar, ejecutar y utilizar este proyecto utilizando Docker.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu sistema:

- [Docker Desktop]
- MongoDB

## Despliegue utilizando Docker

### 1. Descargar la imagen de Docker

La imagen Docker del proyecto está disponible en Docker Hub. Puedes descargarla ejecutando: https://hub.docker.com/r/gagus07/backend-iii

### 2. Configurar la variable de entorno MONGO_URL

La aplicación requiere la variable de entorno **MONGO_URL** para conectarse

### 3. Ejecutar la imagen Docker

Una vez que hayas configurado la URI de MongoDB, puedes ejecutar el contenedor con el siguiente comando:

`docker run -d \
 -p 8081:8080 \
 -e MONGO_URL=my-mongodb
gagus07/backend-iii:latest`

Este comando hará lo siguiente:

- Ejecutará el contenedor en segundo plano (-d).
- Expondrá la aplicación en el puerto 8081 del host.
- Configurará la variable de entorno MONGO_URL en el contenedor.

### 4. Acceso a la aplicación

Una vez que el contenedor esté en ejecución, la aplicación estará disponible en:

`http://localhost:8081`

### 5. Verificar el estado del contenedor

Para verificar que el contenedor esté corriendo correctamente, puedes usar:

`docker ps`

### 6. Detener el contenedor

Si necesitas detener el contenedor, puedes hacerlo ejecutando:

`docker stop <container_id>`

Reemplaza `<container_id>` con el ID del contenedor que aparece en la lista de docker ps.
