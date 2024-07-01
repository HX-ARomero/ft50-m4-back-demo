# TRIVIAS

[Volver a Inicio](../README.md)

## ¿Cuáles son los resultados de los console.log?

```js
let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);
```

Opciones:

- A: true false true
- B: false false true
- C: true false false
- D: false true true

<details>
  <summary>Respuesta correcta...</summary>
D (true false false)

new Number () es un constructor de funciones incorporado.
Aunque parece un número, no es realmente un número:
tiene muchas características adicionales y es un objeto.
Cuando usamos el operador ==, solo verifica si tiene el mismo valor.
Ambos tienen el valor de 3, por lo que devuelve true.

Sin embargo, cuando usamos el operador ===,
tanto el valor como el tipo deben ser iguales.
Entonces: new Number () no es un número, es un objeto.
Ambos devuelven "false".

</details>

## ¿Cuáles son los resultados de los console.log?

```js
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

<details>
  <summary>Respuesta correcta...</summary>
Los Resultados serán: 0, 2, 2

El operador postfix unario ++:
- Devuelve el valor (esto devuelve 0)
- Incrementa el valor (el número es ahora 1)

El operador unario prefix ++:
- Incrementa el valor (el número es ahora 2)
-  Devuelve el valor (esto devuelve 2)
Por lo tanto, devuelve 0 2 2.
</details>
