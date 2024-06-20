# Nest JS - Nest JS Routing

[Volver a Inicio](../README.md)

## 🎯Repaso de Nest JS

- NestJS es un framework para construir aplicaciones del lado del servidor utilizando TypeScript y basado en conceptos de:
  - Diseño de "Arquitectura Modular" y en patrones de diseño como Inversión de Control (IoC).
  - La "inyección de dependencias", que hace mucho mas eficiente al utilizar una sola Instancia en todo el código. Ejemplo de instancia de BBDD.
- **Módulos**
  - **Función**: Agrupar y organizar el código relacionado por entidades.
  - **Características**: Usa `@Module()`, encapsula componentes relacionados, facilita la reutilización.
- **Controladores**
  - **Función**: Gestionar rutas y solicitudes HTTP, desestructurar información y dar respuesta al Cliente.
    - **Características**: Usa `@Controller()`, define rutas, interactúa con servicios.
- **Servicios**
  - **Función**: Contener la lógica de negocio.
  - **Características**: Usa `@Injectable()`, implementa métodos de negocio, interactúa con repositorios.
- **Repositorios**
  - **Función**: Manejar la interacción con la base de datos u otras APIs.
  - **Características**: Proporcioservidores externos.

## 🎯Guardianes e Interceptores

### Guardianes (Guards)

Propósito:

- Los Guardianes en NestJS se utilizan para controlar el acceso a las rutas, es decir, para implementar lógica de autorización. Los guardianes determinan si una solicitud debe ser manejada por la ruta correspondiente o no.

Cómo funcionan:

- Se ejecutan antes de que el controlador maneje la solicitud.
  Retornan un booleano (true para permitir el acceso, false para denegarlo) o una Promesa que resuelve a un booleano.

### Interceptores

Propósito:

- Los Interceptores en NestJS permiten modificar o extender el comportamiento de las solicitudes y respuestas. Se pueden utilizar para una variedad de tareas como el manejo de logging, transformación de datos, y manipulación de errores.

Cómo funcionan:

- Se ejecutan antes y después del método del controlador.
  Pueden modificar los datos de la solicitud y la respuesta.
  Se pueden usar para envolver la lógica del controlador y agregar lógica adicional.

### Diferencias clave entre Guardianes e Interceptores

Propósito:

- Guardianes: Se utilizan para control de acceso y lógica de autorización.
- Interceptores: Se utilizan para manipular y transformar datos antes de que se envíen al cliente o después de que se reciban del cliente.

Momento de ejecución:

- Guardianes: Se ejecutan antes de que el controlador maneje la solicitud.
- Interceptores: Se ejecutan tanto antes como después de la ejecución del método del controlador.

Modificación de datos:

- Guardianes: No modifican los datos de la solicitud o la respuesta.
- Interceptores: Pueden modificar los datos de la solicitud y la respuesta.

Resultado:

- Guardianes: Retornan un booleano que determina si se permite el acceso.
- Interceptores: Retornan un Observable que permite transformar los datos antes de enviarlos al controlador o al cliente.
