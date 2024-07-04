function retornaVariable() {
  return variableInexistente;
}

function imprimeMensaje() {
  console.log(retornaVariable());
}

try {
  imprimeMensaje();
} catch (error) {
  console.log('Error name: ' + error.name);
  console.log('Error message: ' + error.message);
  console.log('Error stack: ' + error.stack);
}
