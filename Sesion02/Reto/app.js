const IVA = 0.19;
const formato = { style: "currency", currency: "COP", minimumFractionDigits: 2 };

let precio = Number(prompt("Precio unitario del producto:"));
let cantidad = Number(prompt("Cantidad:"));
let descuento = Number(prompt("Porcentaje de descuento (0 si no hay):"));

if (Number.isNaN(precio) || Number.isNaN(cantidad) || Number.isNaN(descuento)) {
  alert("Revisa los datos, todos deben de ser números");
} else {
  let subtotal = precio * cantidad;
  let valorDescuento = subtotal * descuento / 100;
  let conDescuento = subtotal - valorDescuento;
  let valorIva = conDescuento * IVA;
  let total = conDescuento + valorIva;

  console.log("Subtotal: " + subtotal.toLocaleString("es-CO", formato));
  console.log("Descuento: -" + valorDescuento.toLocaleString("es-CO", formato));
  console.log("IVA (19 %): " + valorIva.toLocaleString("es-CO", formato));
  console.log("TOTAL: " + total.toLocaleString("es-CO", formato));

  alert("TOTAL: " + total.toLocaleString("es-CO", formato));
}
