# Nest JS - Deployment

[Volver a Inicio](../README.md)

## GITHUB ACTIONS

[Ejemplo de Archivo "main.yaml"](./main.yml)

## INGRESAR A LA CONSOLA DE LA BASE DE DATOS DE RENDER

- Obtenemos los datos de la Base de Datos desde Render
- En el SQL Shell (psql):

```sql
Server [localhost]:                  <external_database_URL>
Database [postgres]:                 <external_database_URL>
Port [5432]:                         5432
Username [postgres]:                 <user_name>
Contraseña para usuario <user_name>: <PSQL Command>
```

### Hacer a un usuario Admin

- En el SQL Shell (psql):

```sql
\dt
SELECT * FROM users;

UPDATE users SET isAdmin = true WHERE name = 'Marge';
```
