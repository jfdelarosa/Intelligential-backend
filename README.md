# Backend

El backend está montado en Heroku: `https://jfdelarosa-intelligential-back.herokuapp.com`

### Consideraciones

Debido al tiempo reducido, tuve que hacer algunas elecciones que me ayudaron a ganar un poco de tiempo pero que perjudican un poco en la arquitectura del proyecto:

- Hice los cambios directamente en `master`, no usé GitFlow.
- No usé las migraciones de Sequelize, en su lugar, opté por sincronizar la BBDD con cada cambio de modelo ( ver [src/loaders/sequelize.js](src/loaders/sequelize.js)).
- Decidí agrupar los servicios y controladores de cada entidad en un solo archivo (ej: `controllers/userControllers.js` en vez de `controllers/user/*.js`).
- No usé loggers (usualmente utilizo [winston](https://github.com/winstonjs/winston) y [morgan](https://github.com/expressjs/morgan)).
- No usé un validador adicional para el body de las peticiones (Acostumbro usar [Celebrate](https://github.com/arb/celebrate)).
- No se comprueban los permisos del usuario que hace la petición

## Correr la app de forma local

### Instalación de dependencias

```
npm install
```

### Variables de entorno

Renombrar el archivo `.env.example` a `.env` y configurar las variables necesarias.

### Iniciar aplicación

```
npm run dev
```
