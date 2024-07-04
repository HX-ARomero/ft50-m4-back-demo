//* FUNCIÓN CONSTRUCTORA
function Usuario(nombre, apellido) {
  this._nombre = nombre;
  this.apellido = apellido;
}
Usuario.prototype.saludar = function () {
  return `Hola ${this._nombre}`;
};

const homero = new Usuario('Homero', 'Simpson');
// console.log(homero.saludar());
// console.log(homero.nombre);
// console.log(homero.apellido);

//* CLASES
class Admin {
  #nombre;
  constructor(nombre, apellido) {
    this.#nombre = nombre;
    this.apellido = apellido;
  }
  nombreCompleto() {
    return `${this.#nombre} ${this.apellido}`;
  }
}

const marge = new Admin('Marge', 'Bubbie');
console.log(marge.nombreCompleto());
console.log(marge.nombre);
console.log(marge.apellido);
