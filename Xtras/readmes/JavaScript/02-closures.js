function balance(nombre, saldoInicial) {
  const usuario = nombre;
  let saldo = saldoInicial;
  return {
    consultar: () => { return `Saldo de ${usuario} = ${saldo}`},
    depositar: (monto) => {
      saldo = saldo + monto;
      return `Saldo de ${usuario} = ${saldo}`;
    },
    extraer: (monto) => {
      saldo = saldo - monto;
      return `Saldo de ${usuario} = ${saldo}`;
    },
  }
}

const balanceMarge = balance('Marge', 500);
console.log(balanceMarge.consultar());
console.log(balanceMarge.depositar(100));
console.log(balanceMarge.extraer(50));

const balanceHomero = balance('Homero', 200);
console.log(balanceHomero.consultar());
console.log(balanceHomero.extraer(20));
console.log(balanceHomero.extraer(50));