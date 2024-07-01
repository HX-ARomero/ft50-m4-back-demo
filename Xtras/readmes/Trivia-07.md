# Múltiple Choice

[Volver a Inicio](../README.md)

> Se evalúan los temas vistos hasta Autenticación

## 1. ¿Cuál es la salida de la siguiente ruta en un controlador de NestJS cuando se accede a GET /users/123?

```ts
@Get(':id')
getUserById(@Param('id') id: string) {
  return `User ID: ${id}`;
}
```

- a) User ID:
- b) User ID: 123
- c) User ID: id
- d) User ID: undefined
<details>
  <summary>Respuesta correcta...</summary>
b) User ID: 123
</details>

## 2. ¿Qué decorador se utiliza para definir una ruta que responde a cualquier método HTTP?

- a) @Any()
- b) @All()
- c) @AllRoutes()
- d) @HttpAll()
<details>
  <summary>Respuesta correcta...</summary>
b) @All()
</details>

## 3. ¿Cuál es el propósito del decorador @Param() en un método de controlador de NestJS?

- a) Obtener parámetros de consulta (query)
- b) Obtener parámetros de la URL
- c) Obtener parámetros del cuerpo de la solicitud
- d) Obtener parámetros de las cabeceras (headers)
<details>
  <summary>Respuesta correcta...</summary>
b) Obtener parámetros de la URL
</details>

## 4. ¿Cuál será el resultado de la siguiente configuración cuando se accede a GET /products?name=phone?

```ts
@Get()
getProducts(@Query('name') name: string) {
  return `Product Name: ${name}`;
}
```

- a) Product Name:
- b) Product Name: undefined
- c) Product Name: phone
- d) Product Name: null
<details>
  <summary>Respuesta correcta...</summary>
c) Product Name: phone
</details>

## 5. ¿Cómo puedes definir una ruta que responda a un método DELETE en un controlador de NestJS?

- a) @Delete()
- b) @Remove()
- c) @Del()
- d) @HttpDelete()
<details>
  <summary>Respuesta correcta...</summary>
a) @Delete()
</details>

## 6. ¿Cuál es la salida de la siguiente configuración si canActivate() retorna false?

```ts
@UseGuards(AuthGuard)
@Get('protected')
getProtectedResource() {
  return 'This is a protected resource';
}
```

- a) This is a protected resource
- b) Error 403 Forbidden
- c) Error 401 Unauthorized
- d) No response
<details>
  <summary>Respuesta correcta...</summary>
c) Error 401 Unauthorized
</details>

## 7. ¿Qué debe retornar el método canActivate() de un guardián en NestJS para permitir el acceso a una ruta?

- a) true
- b) false
- c) 1
- d) null
<details>
  <summary>Respuesta correcta...</summary>
a) true
</details>

## 8. ¿Qué se debe importar para crear un guardián en NestJS?

- a) CanActivate
- b) AuthGuard
- c) Guard
- d) ActivateGuard
<details>
  <summary>Respuesta correcta...</summary>
a) CanActivate
</details>

## 9. ¿Cuál será la salida de la siguiente configuración si el guardián RoleGuard retorna false?

```ts
@UseGuards(RoleGuard)
@Get('admin')
getAdminResource() {
  return 'Admin resource';
}
```

- a) Admin resource
- b) Error 403 Forbidden
- c) Error 401 Unauthorized
- d) No response
<details>
  <summary>Respuesta correcta...</summary>
b) Error 403 Forbidden
</details>

## 10. ¿Cómo se aplica un guardián a nivel de método en NestJS?

- a) @Guard(RoleGuard)
- b) @UseGuard(RoleGuard)
- c) @UseGuards(RoleGuard)
- d) @ApplyGuard(RoleGuard)
<details>
  <summary>Respuesta correcta...</summary>
c) @UseGuards(RoleGuard)
</details>

## 11. ¿Cuál es el propósito de un interceptor en NestJS?

- a) Manejar errores globales
- b) Transformar datos de entrada
- c) Interceptar y modificar solicitudes o respuestas
- d) Determinar si se permite o no una solicitud
<details>
  <summary>Respuesta correcta...</summary>
c) Interceptar y modificar solicitudes o respuestas
</details>

## 12. ¿Qué debe retornar el método intercept() de un interceptor en NestJS?

- a) Observable
- b) Promise
- c) Response
- d) Request
<details>
  <summary>Respuesta correcta...</summary>
a) Observable
</details>

## 13. ¿Cómo se aplica un interceptor a un controlador completo en NestJS?

- a) @UseInterceptor(InterceptorName)
- b) @ApplyInterceptor(InterceptorName)
- c) @UseInterceptors(InterceptorName)
- d) @ActivateInterceptor(InterceptorName)
<details>
  <summary>Respuesta correcta...</summary>
c) @UseInterceptors(InterceptorName)
</details>

## 14. ¿Qué es lo que hace el siguiente interceptor?

```ts
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');
    return next.handle().pipe(tap(() => console.log('After...')));
  }
}
```

- a) Loggea antes de que se ejecute la ruta
- b) Loggea después de que se ejecute la ruta
- c) Loggea antes y después de que se ejecute la ruta
- d) No hace nada
<details>
  <summary>Respuesta correcta...</summary>
c) Loggea antes y después de que se ejecute la ruta
</details>

## 15. ¿Qué se puede modificar con un interceptor en NestJS?

- a) Solo solicitudes
- b) Solo respuestas
- c) Tanto solicitudes como respuestas
- d) Ninguna de las anteriores
<details>
  <summary>Respuesta correcta...</summary>
c) Tanto solicitudes como respuestas
</details>

## 16. ¿Qué interfaz debe implementar un pipe en NestJS?

- a) CanActivate
- b) Interceptor
- c) PipeTransform
- d) Pipe
- <details>
    <summary>Respuesta correcta...</summary>
  c) PipeTransform
  </details>

## 17. ¿Cuál es la función principal de un pipe en NestJS?

- a) Transformar datos de entrada
- b) Interceptar y modificar respuestas
- c) Manejar errores globales
- d) Determinar si se permite o no una solicitud
- <details>
    <summary>Respuesta correcta...</summary>
  a) Transformar datos de entrada
  </details>

## 18. ¿Qué es lo que hace el siguiente pipe?

```ts
@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadat- a): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('Validation failed');
    }
    return val;
  }
}
```

- a) Transforma un valor de tipo string a number
- b) Valida que el valor sea un number
- c) Lanza una excepción si el valor no es un number
- d) Todas las anteriores
<details>
  <summary>Respuesta correcta...</summary>
d) Todas las anteriores
</details>

## 19. ¿Cómo se aplica un pipe a un parámetro específico de un método en NestJS?

- a) @UsePipe(PipeName)
- b) @ApplyPipe(PipeName)
- c) @UsePipes(PipeName)
- d) @Param('param', PipeName)
<details>
  <summary>Respuesta correcta...</summary>
d) @Param('param', PipeName)
</details>

## 20. ¿Qué hace la propiedad whitelist en ValidationPipe?

- a) Permite solo las propiedades especificadas en el DTO
- b) Permite todas las propiedades excepto las especificadas en el DTO
- c) Elimina las propiedades que no están en el DTO
- d) Valida las propiedades del DTO
<details>
  <summary>Respuesta correcta...</summary>
a) Permite solo las propiedades especificadas en el DTO
</details>

## 21. ¿Qué Tipado tiene una imagen cargado en NestJS?

- a) Express.Multer.Type
- b) Express.Multer.Buffer
- c) Express.Multer.Image
- d) Express.Multer.File
<details>
  <summary>Respuesta correcta...</summary>
c) d) Express.Multer.File
</details>

## 22. ¿Qué decorador se utiliza para manejar la carga de un solo archivo en NestJS?

- a) @UploadFile()
- b) @Upload()
- c) @File()
- d) @UploadedFile()
<details>
  <summary>Respuesta correcta...</summary>
d) @UploadedFile()
</details>

## 23. ¿Qué decorador se utiliza para manejar la carga de múltiples archivos en NestJS?

- a) @UploadedFiles()
- b) @UploadFiles()
- c) @Files()
- d) @UploadMultipleFiles()
<details>
  <summary>Respuesta correcta...</summary>
a) @UploadedFiles()
</details>

## 24. ¿Cuál es el propósito de la opción limits en la configuración de multer?

- a) Establecer límites de tamaño y cantidad de archivos
- b) Definir tipos de archivos permitidos
- c) Configurar la ruta de almacenamiento
- d) Determinar el comportamiento del servidor
<details>
  <summary>Respuesta correcta...</summary>
a) Establecer límites de tamaño y cantidad de archivos
</details>

## 25. ¿Cómo se define la ruta de almacenamiento para archivos subidos utilizando multer en NestJS?

- a) storage: 'path/to/storage'
- b) destination: 'path/to/storage'
- c) storage: { destination: 'path/to/storage' }
- d) dest: 'path/to/storage'
<details>
  <summary>Respuesta correcta...</summary>
d) dest: 'path/to/storage'
</details>

## 26. ¿Cuál es el propósito de bcrypt en una aplicación NestJS?

- a) Cifrar mensajes
- b) Generar tokens
- c) Hashing de contraseñas
- d) Validar tokens
<details>
  <summary>Respuesta correcta...</summary>
c) Hashing de contraseñas
</details>

## 27. ¿Cuál de las siguientes funciones de bcrypt se utiliza para comparar una contraseña con un hash almacenado?

- a) compare()
- b) hash()
- c) check()
- d) validate()
<details>
  <summary>Respuesta correcta...</summary>
a) compare()
</details>

## 28. ¿Cuál es el factor de costo recomendado al generar un hash con bcrypt para un buen balance entre seguridad y rendimiento?

- a) 5
- b) 10
- c) 15
- d) 20
<details>
  <summary>Respuesta correcta...</summary>
b) 10
</details>

## 29. ¿Qué significa JWT?

- a) Java Web Token
- b) JSON Web Token
- c) JavaScript Web Token
- d) JSON With Token
<details>
  <summary>Respuesta correcta...</summary>
b) JSON Web Token
</details>

## 30. ¿Qué módulo de NestJS se utiliza para trabajar con JWT?

- a) @nestjs/auth
- b) @nestjs/jwt
- c) @nestjs/security
- d) @nestjs/token
<details>
  <summary>Respuesta correcta...</summary>
b) @nestjs/jwt
</details>

## 31. ¿Qué método se utiliza para firmar un token JWT en NestJS?

- a) signToken()
- b) generateToken()
- c) createToken()
- d) sign()
<details>
  <summary>Respuesta correcta...</summary>
d) sign()
</details>

## 32. ¿Qué método se utiliza para verificar un token JWT en NestJS?

- a) checkToken()
- b) validateToken()
- c) verifyToken()
- d) verify()
<details>
  <summary>Respuesta correcta...</summary>
d) verify()
</details>

## 33. ¿Qué información se suele incluir en el payload de un token JWT?

- a) Información de sesión
- b) Clave pública
- c) Datos del usuario como ID y roles
- d) Credenciales de base de datos
<details>
  <summary>Respuesta correcta...</summary>
c) Datos del usuario como ID y roles
</details>

## 34. ¿Cómo se protege un endpoint en NestJS utilizando JWT?

- a) Usando @UsePipes(JwtPipe)
- b) Usando @UseGuards(JwtAuthGuard)
- c) Usando @UseInterceptors(JwtInterceptor)
- d) Usando @UseFilters(JwtFilter)
<details>
  <summary>Respuesta correcta...</summary>
b) @UseGuards(JwtAuthGuard)
</details>

## 35. ¿Cuál de las siguientes afirmaciones es verdadera sobre JWT?

- a) Los tokens JWT están cifrados por defecto
- b) Los tokens JWT no pueden ser decodificados sin la clave secreta
- c) Los tokens JWT contienen una carga útil (payload) que puede ser leída sin necesidad de clave secreta
- d) Los tokens JWT son válidos indefinidamente una vez emitidos
<details>
  <summary>Respuesta correcta...</summary>
c) Los tokens JWT contienen una carga útil (payload) que puede ser leída sin necesidad de clave secreta
</details>

## 36. ¿Qué parte del token JWT contiene la información sobre la firma del token?

- a) Header
- b) Payload
- c) Signature
- d) Metadata
<details>
  <summary>Respuesta correcta...</summary>
c) Signature
</details>

## 37. ¿Cómo se maneja la expiración de un token JWT?

- a) Utilizando el campo exp en el payload
- b) Utilizando el campo exp en el header
- c) Utilizando el campo exp en la firma
- d) Utilizando el campo exp en las cabeceras (headers)
<details>
  <summary>Respuesta correcta...</summary>
a) Utilizando el campo exp en el payload
</details>

## 38. ¿Qué módulo se utiliza junto con @nestjs/jwt para manejar la autenticación de manera más completa en NestJS?

- a) @nestjs/passport
- b) @nestjs/authentication
- c) @nestjs/authorization
- d) @nestjs/security
<details>
  <summary>Respuesta correcta...</summary>
a) @nestjs/passport
</details>

## 39. ¿Cuál es la ventaja principal de utilizar JWT para la autenticación en aplicaciones web?

- a) Menor tamaño de datos transmitidos
- b) Mayor seguridad al no transmitir contraseñas en cada solicitud
- c) Permite autenticación sin estado (stateless)
- d) Mejora el rendimiento de la base de datos
<details>
  <summary>Respuesta correcta...</summary>
c) Permite autenticación sin estado (stateless)
</details>

## 40. ¿Qué función realiza el siguiente código de configuración en un módulo de autenticación en NestJS?

```ts
JwtModule.register({
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: '1h' },
});
```

- a) Configura el módulo JWT para usar una clave secreta y establece la expiración de los tokens
- b) Configura el módulo JWT para cifrar las contraseñas
- c) Configura el módulo JWT para validar las contraseñas
- d) Configura el módulo JWT para firmar los tokens de sesión
<details>
  <summary>Respuesta correcta...</summary>
a) Configura el módulo JWT para usar una clave secreta y establece la expiración de los tokens
</details>
