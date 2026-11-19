let agenda = [
  { nombre: "Ana Torres", telefono: "3001112233", correo: "ana@correo.com" },
  { nombre: "Carlos Pérez", telefono: "3012223344", correo: "carlos@correo.com" },
  { nombre: "Mariana Gómez", telefono: "3023334455", correo: "mariana@correo.com" }
];


function agregarContacto() {
  let nombre = prompt("Nombre del contacto:");
  let telefono = prompt("Teléfono:");
  let correo = prompt("Correo:");


  if (nombre === null || telefono === null || correo === null) {
    alert("No se agregó el contacto");
    return;
  }

  agenda.push({ nombre: nombre, telefono: telefono, correo: correo });
  alert("Contacto agregado");
}

// 2b. Ver la agenda con console.table
function verAgenda() {
  console.table(agenda);
  alert("Revisa la consola para ver la agenda");
}


function buscarContacto() {
  let texto = prompt("Escribe parte del nombre:");

  if (texto === null) {
    return;
  }

  texto = texto.toLowerCase();
  let encontrados = [];

  for (let i = 0; i < agenda.length; i++) {
    // Pasamos el nombre a minúsculas para comparar
    if (agenda[i].nombre.toLowerCase().includes(texto)) {
      encontrados.push(agenda[i]);
    }
  }

  if (encontrados.length === 0) {
    alert("No se encontró ningún contacto");
  } else {
    console.table(encontrados);
    alert("Se encontraron " + encontrados.length + " contacto(s). Mira la consola");
  }
}

let opcion;

do {
  opcion = prompt(
    "AGENDA\n" +
    "1. Agregar contacto\n" +
    "2. Ver agenda\n" +
    "3. Buscar contacto\n" +
    "4. Salir"
  );

  switch (opcion) {
    case "1":
      agregarContacto();
      break;
    case "2":
      verAgenda();
      break;
    case "3":
      buscarContacto();
      break;
    case "4":
      alert("¡Hasta pronto!");
      break;
    default:
      alert("Opción no válida");
  }
} while (opcion !== "4" && opcion !== null);
