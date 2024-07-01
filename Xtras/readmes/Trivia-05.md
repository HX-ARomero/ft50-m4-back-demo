# Preguntas de Múltiple Choice sobre Pipes en NestJS

[Volver a Inicio](../README.md)

> Estos archivos ya se encuentran pusheados en nuestro repo...

## 1- ¿Qué es un Pipe en NestJS?

- A) Una clase que transforma datos de entrada
- B) Un módulo para manejo de rutas
- C) Un servicio para interactuar con la base de datos
- D) Un controlador para manejar solicitudes HTTP
<details>
  <summary>Respuesta correcta...</summary>
A) Una clase que transforma datos de entrada
</details>

## 2- ¿Cuál de las siguientes afirmaciones sobre Pipes es verdadera?

- A) Los Pipes solo pueden ser utilizados en controladores
- B) Los Pipes transforman y validan datos
- C) Los Pipes son utilizados para el manejo de excepciones
- D) Los Pipes solo pueden ser utilizados en servicios
<details>
  <summary>Respuesta correcta...</summary>
B) Los Pipes transforman y validan datos
</details>

## 3- ¿Cuál de los siguientes decoradores se usa para aplicar un Pipe a un parámetro específico de una ruta?

- A) @UsePipe
- B) @UsePipes
- C) @ParamPipe
- D) @Pipe
<details>
  <summary>Respuesta correcta...</summary>
B) @UsePipes
</details>

## 4- ¿Cuál es el propósito del método transform en un Pipe?

- A) Manejar solicitudes HTTP
- B) Transformar y validar datos
- C) Interactuar con la base de datos
- D) Configurar rutas
<details>
  <summary>Respuesta correcta...</summary>
B) Transformar y validar datos
</details>

## 5- ¿Qué Pipe de NestJS se usa para validar datos de entrada utilizando clases y decoradores?

- A) ParseIntPipe
- B) ValidationPipe
- C) ParseBoolPipe
- D) ParseFloatPipe
<details>
  <summary>Respuesta correcta...</summary>
B) ValidationPipe
</details>

## 6- ¿Cómo se aplica un Pipe globalmente en una aplicación NestJS?

- A) app.useGlobalPipes()
- B) app.applyPipes()
- C) app.globalPipe()
- D) app.setGlobalPipes()
<details>
  <summary>Respuesta correcta...</summary>
A) app.useGlobalPipes()
</details>

## 7- ¿Cuál es la ventaja de usar el ValidationPipe con la opción whitelist activada?

- A) Permite cualquier propiedad en el objeto de entrada
- B) Elimina propiedades no declaradas en los DTO
- C) Valida datos de salida
- D) No tiene ninguna ventaja
<details>
  <summary>Respuesta correcta...</summary>
B) Elimina propiedades no declaradas en los DTO
</details>

## 8- ¿Qué opción de ValidationPipe devuelve todas las propiedades no válidas en el objeto de error?

- A) whitelist
- B) forbidNonWhitelisted
- C) transform
- D) exceptionFactory
<details>
  <summary>Respuesta correcta...</summary>
B) forbidNonWhitelisted
</details>

## 9- ¿Qué hace el Pipe ParseIntPipe?

- A) Convierte un valor a entero
- B) Convierte un valor a cadena
- C) Convierte un valor a booleano
- D) Convierte un valor a decimal
<details>
  <summary>Respuesta correcta...</summary>
A) Convierte un valor a entero
</details>

## 10- ¿Qué decorador se utiliza para aplicar múltiples Pipes a un parámetro?

- A) @Pipes
- B) @UsePipes
- C) @ParamPipes
- D) @Pipe
<details>
  <summary>Respuesta correcta...</summary>
B) @UsePipes
</details>

## 11- ¿Cuál es la diferencia entre Pipes síncronos y asíncronos en NestJS?

- A) Los Pipes síncronos son más rápidos
- B) Los Pipes asíncronos pueden manejar promesas
- C) Los Pipes síncronos pueden manejar promesas
- D) No hay diferencia
<details>
  <summary>Respuesta correcta...</summary>
B) Los Pipes asíncronos pueden manejar promesas
</details>

## 12- ¿Cómo se puede acceder a la metainformación del contexto en un Pipe?

- A) A través del objeto de contexto de ejecución
- B) A través del objeto de controlador
- C) A través del decorador @UseGuards
- D) A través del servicio
<details>
  <summary>Respuesta correcta...</summary>
A) A través del objeto de contexto de ejecución
</details>

## 13- ¿Cuál de los siguientes Pipes es proporcionado por defecto en NestJS para la transformación de datos?

- A) ParseUUIDPipe
- B) ParseArrayPipe
- C) ParseIntPipe
- D) ParseDatePipe
<details>
  <summary>Respuesta correcta...</summary>
C) ParseIntPipe
</details>

## 14- ¿Qué hace la opción transform en el ValidationPipe?

- A) Cambia el valor de retorno del controlador
- B) Cambia la estructura de datos de entrada
- C) Cambia los métodos del controlador
- D) Cambia la ruta del controlador
<details>
  <summary>Respuesta correcta...</summary>
B) Cambia la estructura de datos de entrada
</details>

## 15- ¿Qué opción del ValidationPipe evita la inclusión de propiedades no especificadas en el DTO?

- A) whitelist
- B) forbidNonWhitelisted
- C) transform
- D) skipMissingProperties
<details>
  <summary>Respuesta correcta...</summary>
A) whitelist
</details>

## 16- ¿Qué decorador se utiliza para aplicar un Pipe a nivel de controlador?

- A) @ControllerPipes
- B) @UsePipes
- C) @PipeController
- D) @ControllerUse
<details>
  <summary>Respuesta correcta...</summary>
B) @UsePipes
</details>

## 17- ¿Qué método del ValidationPipe personaliza el formato del error de validación?

- A) validateFactory
- B) errorFormat
- C) exceptionFactory
- D) transformFactory
<details>
  <summary>Respuesta correcta...</summary>
C) exceptionFactory
</details>

## 18- ¿Cuál es el objetivo principal de los Pipes en NestJS?

- A) Transformar datos de entrada
- B) Manejar excepciones
- C) Crear servicios
- D) Configurar rutas
<details>
  <summary>Respuesta correcta...</summary>
A) Transformar datos de entrada
</details>

## 19- ¿Cómo se pasa un Pipe personalizado a un parámetro específico?

- A) @Param('id', new CustomPipe())
- B) @ParamPipe('id', CustomPipe)
- C) @Param('id', CustomPipe)
- D) @UsePipe(CustomPipe)
<details>
  <summary>Respuesta correcta...</summary>
A) @Param('id', new CustomPipe())
</details>

## 20- ¿Qué opción del ValidationPipe activa la transformación automática de datos?

- A) autoTransform
- B) autoValidation
- C) transform
- D) validate
<details>
  <summary>Respuesta correcta...</summary>
C) transform
</details>