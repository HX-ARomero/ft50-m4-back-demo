//* 1. Función que retorna otra función
//* 2. La función anidada usa una variable de la función contenedora
//* 3. La función anidada es invocada desde un scope externo

function sumaUno(inicio) {
  let resultado = inicio;
  return function (num) {
    resultado = resultado + num;
    return resultado;
  };
}

const contador = sumaUno(10); //* function() {resultado++; return resultado; }
console.log(contador);
console.log(contador(2));
console.log(contador(2));
console.log(contador(2));

const contador2 = sumaUno(50);
console.log(contador2(5));