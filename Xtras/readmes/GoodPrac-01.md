# Buenas Prácticas en JavaScript

[Volver a Inicio](../README.md)

## Usar const y let en lugar de var

> Ayuda a evitar problemas de hoisting y mantiene el alcance de las variables más predecible.

```js
const myConstant = 'Soy una constante';
let myVariable = 'Este valor puede modificarse';
```

## Escribir funciones puras

> Evita efectos secundarios y hace que las funciones sean más fáciles de entender y probar.

```js
function add(a, b) {
  return a + b;
}
```

## Usar Arrow Functions

> Para mantener el contexto léxico de this.

```js
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
```

## Destructuración

> Hace que la extracción de valores de objetos y arrays sea más concisa y clara.

```js
const person = { name: 'Homero', age: 40 };
const { name, age } = person;
```

## Uso de Plantillas de Cadenas (Template Strings)

> Para una construcción de cadenas más legible y manejable.

```js
const greeting = `Hola, mi nombre es ${name} y tengo ${age} años.`;
```

Implementar estas prácticas ayudará a escribir código JavaScript más limpio, seguro y mantenible.

## ¿Qué es el Patrón de Módulo?

Usando una Función Autoejecutable (IIFE - Immediately Invoked Function Expression)

```js
const myModule = (function () {
  // Variables privadas
  let privateVariable = 'Soy una variable privada';

  // Función privada
  function privateMethod() {
    console.log(privateVariable);
  }

  return {
    // Variables públicas
    publicVariable: 'Soy una variable pública',

    // Función pública
    publicMethod: function () {
      console.log('Accediendo a la variable privada: ' + privateVariable);
      privateMethod();
    },
  };
})();

// Accediendo a la variable y función pública
console.log(myModule.publicVariable); // 'Soy una variable pública'
myModule.publicMethod(); // 'Accediendo a la variable privada: Soy una variable privada'

// Tratando de acceder a la variable y función privada (esto fallará)
console.log(myModule.privateVariable); // undefined
myModule.privateMethod(); // TypeError: myModule.privateMethod is not a function
```

### Beneficios del Patrón de Módulo

- Encapsulación: Protege el estado interno del módulo del acceso externo, exponiendo solo lo que es necesario.
- Namespace: Evita la contaminación del espacio global de nombres, reduciendo el riesgo de conflictos de nombres.
- Organización: Agrupa funciones y variables relacionadas, mejorando la legibilidad y mantenibilidad del código.
  Privacidad: Proporciona una forma de tener métodos y variables privadas que no pueden ser accedidas desde fuera del módulo.
