function Usuario(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Usuario.prototype.saludar = function () {
  return `Hola ${this.nombre}`;
};
Usuario.prototype.rol = 'user';

const homero = new Usuario('Homero', 'Simpson');
// console.log(homero.saludar());
// console.log(Usuario.prototype);
// console.log(homero.__proto__);
// console.log(Usuario.prototype === homero.__proto__);

class Admin {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
Admin.prototype.nombreCompleto = function () {
  return `${this.nombre} ${this.apellido}`;
};
Admin.prototype.rol = 'admin';

const marge = new Admin('Marge', 'Bubbie');
console.log(marge.nombreCompleto());
console.log(Admin.prototype);
console.log(marge.__proto__);
console.log(Admin.prototype === marge.__proto__);