function sistemaAutenticacion() {
	const usuarios = [
		{ nombre: "Lisa", pass: "1234" },
		{ nombre: "Bart", pass: "abcd" },
	];
	return {
		validarCredenciales: (nombre, pass) => {
			const usuarioActual = usuarios.find(
				(usuario) => usuario.nombre === nombre
			);
			return usuarioActual && usuarioActual.pass === pass;
		},
		cambiarPass: (nombre, passActual, nuevoPass) => {
			const usuarioActual = usuarios.find(
				(usuario) => usuario.nombre === nombre
			);
			if (usuarioActual && usuarioActual.pass === passActual) {
				usuarioActual.pass = nuevoPass;
				return "Contraseña modificada";
			}
		},
	};
}
  
const sistema01 = sistemaAutenticacion();
console.log(sistema01.validarCredenciales("Lisa", "1234"));
console.log(sistema01.validarCredenciales("Bart", "otroPass"));
console.log(sistema01.cambiarPass("Bart", "abcd", "otroPass"));
console.log(sistema01.validarCredenciales("Bart", "otroPass"));