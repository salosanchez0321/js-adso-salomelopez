// Regla para elegir el primer apellido:
// - Si el nombre tiene 4 o mas palabras (ej: "Ana Maria Gomez Perez"),
//   los dos primeros son nombres y el primer apellido es la palabra 3.
// - Si tiene 2 o 3 palabras (ejemplo: "Ana Gomez Perez"),
//   el primer apellido es la palabra 2.

const DOMINIO = "@adso.ejemplo.co";
let correos = [];

function limpiarTexto(texto) {
  let limpio = texto.trim().toLowerCase();
  limpio = limpio.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return limpio;
}

function crearCorreo(nombreCompleto) {
  let palabras = limpiarTexto(nombreCompleto).split(" ");

  let primerNombre = palabras[0];
  let primerApellido;

  if (palabras.length >= 4) {
    primerApellido = palabras[2];
  } else {
    primerApellido = palabras[1];
  }

  let usuario = primerNombre[0] + primerApellido;
  let correo = usuario + DOMINIO;

  let numero = 2;
  while (correos.includes(correo)) {
    correo = usuario + numero + DOMINIO;
    numero++;
  }

  return correo;
}

let nombre = prompt("Escribe un nombre completo (vacío para terminar):");

while (nombre !== null && nombre.trim() !== "") {
  if (limpiarTexto(nombre).split(" ").length < 2) {
    alert("Escribe al menos un nombre y un apellido.");
  } else {
    correos.push(crearCorreo(nombre));
  }
  nombre = prompt("Escribe otro nombre completo (vacío para terminar):");
}

let lista = "";
for (let i = 0; i < correos.length; i++) {
  lista += (i + 1) + ". " + correos[i] + "\n";
}

alert(lista + "\nCorreos generados: " + correos.length);
console.log(lista);
console.log("Correos generados: " + correos.length); 