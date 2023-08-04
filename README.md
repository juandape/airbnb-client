### Airbnb clone legacy project

## Descripción

Se recibe un MVP terminado, un clon de la plataforma Airbnb, para cambiar ciertas funcionalidades y hacerle algunas actualizaciones.

## Video presentación

<!-- https://youtu.be/Mdq2s9HLf00?list=PLxyfMWnjW2ktsDlYU7KVJltXGfHvXVGBE&t=3170 -->

## Tecnologías

### Frontend

- React
- React Router
- SASS
- Redux toolkit
- Axios
- Mantine
- sweetalert2
- Places API
- Maps javascript API
- Geocoding API
- Vite
- Stripe


### Backend

- Node
- Express
- Mongoose
- MongoDB
- bcrypt
- multer
- morgan
- dotenv
- cors
- nodemailer
- cloudinary
- jsonwebtoken
- Swagger

## Vercel URL

https://airbnbcloneclient.vercel.app

## Repositorio Backend

https://github.com/juandape/airbnb-server.git

## Render URL

https://airbnbcloneserver.onrender.com

## Documantacion Swagger

https://airbnbcloneserver.onrender.com/api/v1/docs/

## Cambios a realizar en el proyecto

El proyecto es un MVP que ya está terminado, pero hay algunas funcionalidades que no están implementadas y existen algunas desiciones tecnicas que no fueron las mas acertadas. Tu trabajo es implementar las siguientes funcionalidades:

- [x] Crear un repositorio en GitHub para cada uno de los proyectos (client y server). Este repositorio debe ser publico y debe tener como colaboradores a los instructores del curso. El nombre del repositorio debe ser `airbnb-<client o server>`.
- [x] Ejecutar el proyecto en tu computador y familiarizarte con el código (debes buscar las variables de entorno necesarias para poder ejecutar tu código).
- [x] Adicionar reglas de ESLint al proyecto (airbnb, standarjs) y correr el linter para que el codigo siga esas reglas.
- [x] Migrar el Router a la version 6.4 y utilizar [`createbrowserrouter`](https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter)
- [x] Migrar uso de redux a redux-toolkit.
- [x] Modificar la estructura de carpetas del backend para seguir la convencion basada en [domain modules](https://alexkondov.com/tao-of-node/#structure-in-modules), la vista en clases.
- [x] Implementar pasarela de pagos Stripe
- [x] Modificar la carga de imagenes desde el backend haciendo uso de la libreria multer.
- [x] Cambiar plataforma de envío de correos de nodemailer a resend
- [x] Documentar backend usando swagger
- [ ] Modificar la carpeta de componentes para que tenga el test y el componente, es decir, debes agregar test unitarios a todos los componentes.
