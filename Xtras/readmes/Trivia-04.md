# 20 Preguntas sobre lo visto en NestJS

[Volver a Inicio](../README.md)

> Fundamentos, Routing e Integración con TypeORM. Este Archivo ya se encuentra Pusheado en Nuestro Repo (Trivia-04.md, en carpeta Xtras)...

## 01- ¿Qué función desempeña el decorador @Module() en un módulo de NestJS?

- A) Define las rutas del módulo.
- B) Declara los controladores, proveedores e importaciones del módulo.
- C) Define las configuraciones del servidor.
- D) Configura las variables de entorno.
<details>
  <summary>Respuesta correcta...</summary>
Opción: B
</details>

## 02- ¿Cuál de los siguientes decoradores se utiliza para definir un controlador en NestJS?

- A) @Service()
- B) @Injectable()
- C) @Controller()
- D) @Module()
<details>
  <summary>Respuesta correcta...</summary>
Opción: C
</details>

## 03- En NestJS, ¿qué decorador se utiliza para inyectar un servicio en un controlador?

- A) @Inject()
- B) @Service()
- C) @Injectable()
- D) @Controller()
<details>
  <summary>Respuesta correcta...</summary>
Opción: A
</details>

## 04- ¿Qué método del controlador se utiliza para manejar solicitudes GET en una ruta específica?

- A) @Post()
- B) @Get()
- C) @Put()
- D) @Delete()
<details>
  <summary>Respuesta correcta...</summary>
Opción: B
</details>

## 05- Cuál de los siguientes se utiliza para crear una instancia de la aplicación en NestJS?

- A) NestFactory.createApplication()
- B) NestFactory.create()
- C) NestFactory.initialize()
- D) NestFactory.start()
<details>
  <summary>Respuesta correcta...</summary>
Opción: B
</details>

## 06- ¿Qué propiedad en el decorador @Module() se utiliza para importar otros módulos?

- A) controllers
- B) providers
- C) imports
- D) exports
<details>
  <summary>Respuesta correcta...</summary>
Opción: C
</details>

## 07- ¿Cuál es la función principal de un módulo en NestJS?

- A) Manejar la configuración del servidor.
- B) Agrupar controladores, servicios y otros módulos relacionados.
- C) Definir las rutas de la aplicación.
- D) Proveer acceso a la base de datos.
<details>
  <summary>Respuesta correcta...</summary>
Opción: B
</details>

## 08- ¿Qué decorador se usa para manejar solicitudes POST en un controlador?

- A) @Get()
- B) @Post()
- C) @Put()
- D) @Delete()
<details>
  <summary>Respuesta correcta...</summary>
Opción: B
</details>

## 09- ¿Cómo se extraen los parámetros de una solicitud en un método del controlador en NestJS?

- A) @Param()
- B) @Query()
- C) @Body()
- D) Todas las anteriores
<details>
  <summary>Respuesta correcta...</summary>
Opción: D
</details>

## 10- ¿Cuál es el propósito del decorador @Body() en un controlador de NestJS?

- A) Extraer parámetros de la URL.
- B) Extraer parámetros de la consulta.
- C) Extraer el cuerpo de la solicitud.
- D) Extraer encabezados de la solicitud.
<details>
  <summary>Respuesta correcta...</summary>
Opción: C
</details>

## 11- ¿Qué decorador se utiliza para definir un servicio en NestJS?

- A) @Service()
- B) @Inject()
- C) @Injectable()
- D) @Provider()
<details>
  <summary>Respuesta correcta...</summary>
Opción: C
</details>

## 12- ¿Cómo se marca un servicio para que esté disponible globalmente en NestJS?

- A) Usando el decorador @Global() en el servicio.
- B) Importando el servicio en el módulo raíz.
- C) Usando el decorador @Injectable({ global: true }) en el servicio.
- D) Registrando el servicio en el módulo raíz con el decorador @Global().
<details>
  <summary>Respuesta correcta...</summary>
Opción: D
</details>

## 13- Preguntas sobre Routing
¿Qué método en un controlador se utiliza para manejar solicitudes PUT en una ruta específica?

- A) @Post()
- B) @Get()
- C) @Put()
- D) @Delete()
<details>
  <summary>Respuesta correcta...</summary>
Opción: C
</details>

## 14- ¿Cuál es la función del decorador @Param() en un método del controlador?

- A) Extraer el cuerpo de la solicitud.
- B) Extraer los parámetros de la consulta.
- C) Extraer los parámetros de la URL.
- D) Extraer los encabezados de la solicitud.
<details>
  <summary>Respuesta correcta...</summary>
Opción: C
</details>

## 15- ¿Qué decorador se utiliza para definir una entidad en TypeORM?

- A) @Entity()
- B) @Table()
- C) @Model()
- D) @Schema()
<details>
  <summary>Respuesta correcta...</summary>
Opción: A
</details>

## 16- ¿Qué propiedad en el decorador @Column() se utiliza para definir una columna como clave primaria?

- A) primary
- B) key
- C) id
- D) unique
<details>
  <summary>Respuesta correcta...</summary>
Opción: A
</details>

## 17- ¿Cuál es la función del método forRoot() en el módulo TypeOrmModule?

- A) Configurar la conexión a la base de datos de manera asíncrona.
- B) Configurar la conexión a la base de datos de manera sincrónica.
- C) Definir las entidades para TypeORM.
- D) Iniciar el servidor de base de datos.
<details>
  <summary>Respuesta correcta...</summary>
Opción: B
</details>

## 18- ¿Qué método se utiliza para configurar TypeORM de manera asíncrona en NestJS?

- A) TypeOrmModule.forAsync()
- B) TypeOrmModule.forRootAsync()
- C) TypeOrmModule.forRoot()
- D) TypeOrmModule.forConfigAsync()
<details>
  <summary>Respuesta correcta...</summary>
Opción: B
</details>

## 19- ¿Cómo se inyecta un repositorio de TypeORM en un servicio de NestJS?

- A) Usando el decorador @InjectRepository().
- B) Usando el decorador @Inject().
- C) Usando el decorador @Injectable().
- D) Usando el decorador @Repository().
<details>
  <summary>Respuesta correcta...</summary>
Opción: A
</details>

## 20- ¿Qué propiedad en la configuración de TypeORM define las entidades que se utilizarán?

- A) entities
- B) models
- C) schemas
- D) tables
<details>
  <summary>Respuesta correcta...</summary>
Opción: A
</details>