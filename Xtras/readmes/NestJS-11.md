# Nest JS - Nest JS Open API

[Volver a Inicio](../README.md)

## Links

- [Rick & Morty API](https://rickandmortyapi.com/)
- [JSON Placeholder](https://jsonplaceholder.typicode.com/)
- [Ejemplo de Archivo .yaml](./example.yaml)
- [Swagger / OpenAPI Specifications](https://swagger.io/specification/)
- [Swagger / OpenAPI Guide](https://swagger.io/docs/specification/about/)
- [Nest JS - OPENAPI](https://docs.nestjs.com/openapi/introduction)

## Instalación de Swagger

- Ingresamos en Terminal Integrada:

```bash
npm install --save @nestjs/swagger
```

## 🎯Semantic Versioning (SemVer) - Resumen

- Semantic Versioning (SemVer) es un sistema de control de versiones para software que utiliza una secuencia de números separados por puntos (mayor.menor.parche) para identificar diferentes versiones del software de manera clara y consistente. Este sistema ayuda a los desarrolladores a entender el tipo de cambios que se han realizado en una nueva versión de un software.
- La especificación de Semantic Versioning se puede encontrar en [semver.org](https://semver.org/), y se sigue comúnmente en la gestión de versiones de paquetes en lenguajes de programación como JavaScript (npm), Python (pip), y muchos otros.

### FORMATO DE VERSIÓN

- Un número de versión de SemVer tiene el siguiente formato:
  - MAJOR.MINOR.PATCH
- **MAJOR** (Mayor): Se incrementa cuando se realizan en la API cambios incompatibles con una versión anterior.
- **MINOR** (Menor): Se incrementa cuando se añaden funcionalidades de forma compatible con versiones anteriores.
- **PATCH** (Parche): Se incrementa cuando se hacen correcciones de errores de forma compatible con versiones anteriores, sin modificar la funcionalidad.

### Etiquetas pre-lanzamiento y metadata

- SemVer también permite añadir etiquetas pre-lanzamiento y metadata adicional:

1. **Etiquetas pre-lanzamiento**:
   - Indicadas con un guion después del número de versión.
   - Ejemplo: `1.0.0-alpha`, `1.0.0-beta.2`
2. **Metadata de construcción**:
   - Indicada con un signo más.
   - Ejemplo: `1.0.0+001`, `1.0.0-beta+exp.sha.5114f85`

### Ejemplo de versiones SemVer

- **1.0.0**: Primera versión estable.
- **1.0.1**: Corrección de errores.
- **1.1.0**: Añadida una nueva funcionalidad compatible.
- **2.0.0**: Cambio incompatible con versiones anteriores.
- **2.1.0-alpha**: Versión alpha (pre-lanzamiento) para la próxima versión menor.
- **2.1.0+exp.sha.5114f85**: Versión con metadata de construcción.

### Ventajas de SemVer

- **Claridad**: Los números de versión reflejan claramente el tipo de cambios realizados.
- **Compatibilidad**: Facilita la gestión de dependencias y la integración de software, ya que se puede confiar en que las actualizaciones menores y de parches no romperán la compatibilidad.
- **Comunicación**: Establece expectativas claras para los usuarios sobre la naturaleza y el impacto de una nueva versión.

## 🎯OAS 3.0

- OpenAPI Specification 3.0, que es una especificación estándar para definir y describir APIs RESTful.
- La especificación OpenAPI es mantenida por la OpenAPI Initiative, una organización que forma parte de la Linux Foundation.

### Detalles de OAS 3.0

#### 1. **Estructura de OpenAPI Specification**

- **OpenAPI Document**: El documento OpenAPI define los elementos de una API RESTful. Incluye información sobre los endpoints, métodos HTTP, parámetros, respuestas, y otros detalles relevantes.
- **Paths**: Representa los endpoints disponibles en la API.
- **Components**: Define los esquemas de datos reutilizables, incluyendo definiciones de objetos, respuestas, parámetros, y otros elementos.
- **Security**: Define la seguridad de la API, incluyendo mecanismos de autenticación y autorización.

#### 2. **Beneficios de OAS 3.0**

- **Estándar Abierto**: OAS 3.0 es un estándar abierto ampliamente aceptado, lo que facilita la interoperabilidad entre diferentes herramientas y servicios.
- **Documentación Clara**: Proporciona una manera clara y estructurada de documentar APIs, lo que facilita la comprensión y el uso por parte de los desarrolladores.
- **Generación de Código**: Permite la generación automática de código cliente y servidor en varios lenguajes de programación.
- **Validación**: Facilita la validación de las peticiones y respuestas contra las especificaciones definidas, asegurando que la API funcione según lo esperado.
-

## 🎯cURL

- cURL es una herramienta de línea de comandos y una biblioteca para transferir datos con sintaxis URL. Su nombre proviene de "Client URL." Es ampliamente utilizada para hacer peticiones HTTP y HTTPS, así como para otros protocolos como FTP, FTPS, SCP, SFTP, TFTP, LDAP, LDAPS, DICT, TELNET, y FILE.

### Usos Comunes de cURL

1. **Testing y depuración de APIs**: Verificar y depurar endpoints de APIs REST.
2. **Automatización**: Automatizar tareas como descargar archivos o realizar peticiones programáticas a servicios web.
3. **Monitorización**: Monitorear la disponibilidad y el rendimiento de servicios web.
