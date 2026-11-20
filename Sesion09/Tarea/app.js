const productos = [
  { nombre: "Camiseta", precio: 45000, emoji: "👕" },
  { nombre: "Gorra", precio: 30000, emoji: "🧢" },
  { nombre: "Tenis", precio: 180000, emoji: "👟" },
  { nombre: "Mochila", precio: 95000, emoji: "🎒" },
  { nombre: "Gafas", precio: 60000, emoji: "🕶️" }
];

let carrito = [];

const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("carrito");
const total = document.getElementById("total");

function formatoPesos(valor) {
  return "$" + valor.toLocaleString("es-CO");
}

function pintarProductos() {
  productos.forEach(function (producto) {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("producto");

    tarjeta.innerHTML =
      '<div class="emoji">' + producto.emoji + "</div>" +
      "<h3>" + producto.nombre + "</h3>" +
      "<p>" + formatoPesos(producto.precio) + "</p>";

    const boton = document.createElement("button");
    boton.textContent = "Agregar";
    boton.addEventListener("click", function () {
      agregarAlCarrito(producto);
    });

    tarjeta.appendChild(boton);
    contenedorProductos.appendChild(tarjeta);
  });
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  render();
}

function quitarDelCarrito(posicion) {
  carrito.splice(posicion, 1);
  render();
}

function render() {
  listaCarrito.innerHTML = "";

  if (carrito.length === 0) {
    listaCarrito.innerHTML = '<li class="vacio">El carrito está vacío</li>';
  }

  carrito.forEach(function (producto, posicion) {
    const li = document.createElement("li");

    const texto = document.createElement("span");
    texto.textContent = producto.emoji + " " + producto.nombre + " - " + formatoPesos(producto.precio);

    const boton = document.createElement("button");
    boton.textContent = "❌";
    boton.addEventListener("click", function () {
      quitarDelCarrito(posicion);
    });

    li.appendChild(texto);
    li.appendChild(boton);
    listaCarrito.appendChild(li);
  });

  const suma = carrito.reduce(function (acumulado, producto) {
    return acumulado + producto.precio;
  }, 0);

  total.textContent = "Total: " + formatoPesos(suma);
}

pintarProductos();
render();