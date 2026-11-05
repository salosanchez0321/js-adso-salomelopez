let catalogo = [
  { codigo: "P001", nombre: "Cuaderno", categoria: "Papelería", precio: 5000, stock: 20 },
  { codigo: "P002", nombre: "Lapicero", categoria: "Papelería", precio: 1500, stock: 50 },
  { codigo: "P003", nombre: "Mouse", categoria: "Tecnología", precio: 35000, stock: 0 },
  { codigo: "P004", nombre: "Memoria USB", categoria: "Tecnología", precio: 28000, stock: 8 },
  { codigo: "P005", nombre: "Termo", categoria: "Hogar", precio: 22000, stock: 0 },
  { codigo: "P006", nombre: "Audífonos", categoria: "Tecnología", precio: 45000, stock: 5 }
];

function buscarPorCodigo(codigo) {
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].codigo === codigo.trim().toUpperCase()) {
      return catalogo[i];
    }
  }
  return null;
}

function contarAgotados() {
  let contador = 0;
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].stock === 0) {
      contador++;
    }
  }
  return contador;
}

function valorInventario() {
  let total = 0;
  for (let i = 0; i < catalogo.length; i++) {
    total += catalogo[i].precio * catalogo[i].stock;
  }
  return total;
}

let opcion;

do {
  opcion = prompt(
    "MENÚ DEL CATÁLOGO\n" +
    "1. Ver catálogo\n" +
    "2. Buscar por código\n" +
    "3. Agotados\n" +
    "4. Valor del inventario\n" +
    "0. Salir"
  );

  if (opcion === null) {
    opcion = "0";
  }

  switch (opcion) {
    case "1":
      console.table(catalogo);
      alert("Catálogo mostrado en la consola (F12).");
      break;

    case "2": {
      let codigo = prompt("Escribe el código del producto:");
      if (codigo !== null) {
        let producto = buscarPorCodigo(codigo);
        if (producto === null) {
          alert("No existe un producto con ese código.");
        } else {
          alert(
            "Código: " + producto.codigo + "\n" +
            "Nombre: " + producto.nombre + "\n" +
            "Categoría: " + producto.categoria + "\n" +
            "Precio: $" + producto.precio + "\n" +
            "Stock: " + producto.stock
          );
        }
      }
      break;
    }

    case "3":
      alert("Productos agotados: " + contarAgotados());
      break;

    case "4":
      alert("Valor del inventario: $" + valorInventario());
      break;

    case "0":
      alert("¡Hasta luego!");
      break;

    default:
      alert("Opción no válida.");
  }
} while (opcion !== "0");