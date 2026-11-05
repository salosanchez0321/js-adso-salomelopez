function contarPalabras(frase) {
  let limpia = frase.trim();

  if (limpia === "") {
    return 0;
  }

  let palabras = limpia.split(/\s+/);
  return palabras.length;
}

function formatoTitulo(frase) {
  let palabras = frase.trim().split(/\s+/);
  let resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let nueva = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    resultado.push(nueva);
  }

  return resultado.join(" ");
}

console.log("contarPalabras:", contarPalabras("   hola    mundo   bonito  "));
console.log("formatoTitulo:", formatoTitulo("  hOLA    mUNDO  "));

let tareas = [];
let opcion;

do {
  opcion = prompt(
    "LISTA DE PENDIENTES\n" +
    "1. Agregar tarea\n" +
    "2. Ver lista\n" +
    "3. Eliminar tarea por nombre\n" +
    "4. Salir"
  );

  if (opcion === null) {
    opcion = "4";
  }

  switch (opcion) {
    case "1": {
      let nueva = prompt("Escribe la tarea:");
      if (nueva !== null && nueva.trim() !== "") {
        tareas.push(nueva.trim());
        alert("Tarea agregada.");
      } else {
        alert("No escribiste ninguna tarea.");
      }
      break;
    }

    case "2": {
      if (tareas.length === 0) {
        alert("No hay tareas pendientes.");
      } else {
        let lista = "";
        for (let i = 0; i < tareas.length; i++) {
          lista += (i + 1) + ". " + tareas[i] + "\n";
        }
        alert(lista);
        console.log(lista);
      }
      break;
    }

    case "3": {
      let nombre = prompt("Escribe el nombre de la tarea a eliminar:");
      if (nombre !== null) {
        let posicion = -1;
        for (let i = 0; i < tareas.length; i++) {
          if (tareas[i].toLowerCase() === nombre.trim().toLowerCase()) {
            posicion = i;
          }
        }

        if (posicion === -1) {
          alert("Esa tarea no existe.");
        } else {
          tareas.splice(posicion, 1);
          alert("Tarea eliminada.");
        }
      }
      break;
    }

    case "4":
      alert("¡Hasta luego!");
      break;

    default:
      alert("Opción no válida.");
  }
} while (opcion !== "4");