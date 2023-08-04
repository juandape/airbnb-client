### Airbnb clone legacy project Make it Real

## Descripción

Se recibe un MVP terminado, un clon de la plataforma Airbnb, para cambiar ciertas funcionalidades y hacerle algunas actualizaciones y mejoras.

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

## Cambios realizados en el MVP

- Generación de nuevas variables de entorno necesarias para la ejecución del código.
- Migración del proyecto a Vite.
- Adición de reglas ESLint al proyecto (airbnb, standarjs).
- Migración de React Router a la version 6.4 y uso del componente [`createbrowserrouter`](https://reactrouter.com/en/main/routers/create-browser-router#createbrowserrouter)
- Migración de redux a redux-toolkit.
- Modificación  de la estructura de carpetas del backend para seguir la convencion basada en [domain modules](https://alexkondov.com/tao-of-node/#structure-in-modules).
- Implementación de la pasarela de pagos Stripe
- Modificación de la carga de imagenes desde el backend haciendo uso de la libreria multer.
- Cambio de plataforma de envío de correos de nodemailer a resend
- Documentación del backend usando swagger
