# TRIVIAS

[Volver a Inicio](../README.md)

## 1- ¿Qué devuelve la siguiente función?

```js
function myFunction() {
  console.log(firstName);
  console.log(lastName);
  var firstName = "Bart";
  let lastName = "Simpson";
}

myFunction();
```

- A: "Bart" y undefined
- B: "Bart" y ReferenceError
- C: ReferenceError y "Simpson"
- D: undefined y ReferenceError
<details>
  <summary>Respuesta correcta...</summary>
D: undefined - Cannot access 'lastName' before initialization

Explicación:
- Dentro de la función, primero declaramos la variable firstName con la palabra reservada var. Esto significa que la variable se eleva (el espacio de memoria se configura durante la fase de creación. Hace referencia al termino hoisting) con el valor predeterminado de "undefined", hasta que realmente llegamos a la línea donde definimos la variable. Aún no hemos definido la variable en la línea donde intentamos registrar la variable firstName, por lo que aún mantiene el valor de undefined.
- Las variables con la palabra clave let (y const) se elevan, pero a diferencia de var, no se inicializan. No son accesibles antes de la línea que las declaramos (inicializamos). Esto se llama la "zona muerta temporal". Cuando intentamos acceder a las variables antes de que se declaren, JavaScript lanza un ReferenceError.
</details>

## 2- ¿Cuál es el resultado de lo siguiente?

```js
const resultado = 4 + 2 + "8";
```

- A: 14
- B: "428"
- C: "68"
- D: 68
<details>
  <summary>Respuesta correcta...</summary>
C: "68"

Explicación:
- El 4 y el 2, en este caso, se comportan como números enteros, y el "8" se composrta como una cadena.-
- Por lo tanto 4 + 2 es igual a 6. El resultado de 6 + "8" es "68".
</details>