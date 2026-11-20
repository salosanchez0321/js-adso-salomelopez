const pedidos = [
  { numero: 101, cliente: "Ana", cantidad: 2, precio: 15000, estado: "entregado", tipo: "local" },
  { numero: 102, cliente: "Luis", cantidad: 1, precio: 32000, estado: "pendiente", tipo: "domicilio" },
  { numero: 103, cliente: "Marta", cantidad: 4, precio: 12000, estado: "entregado", tipo: "domicilio" },
  { numero: 104, cliente: "Pedro", cantidad: 3, precio: 25000, estado: "pendiente", tipo: "local" },
  { numero: 105, cliente: "Sofía", cantidad: 5, precio: 9000, estado: "entregado", tipo: "local" },
  { numero: 106, cliente: "Juan", cantidad: 2, precio: 40000, estado: "pendiente", tipo: "domicilio" }
];

const pedidosConTotal = pedidos.map((p) => ({
  numero: p.numero,
  cliente: p.cliente,
  cantidad: p.cantidad,
  precio: p.precio,
  total: p.cantidad * p.precio,
  estado: p.estado,
  tipo: p.tipo
}));
console.table(pedidosConTotal);

const pendientes = pedidos.filter((p) => p.estado === "pendiente");
console.log("Pedidos pendientes:", pendientes.length);

const totalEntregados = pedidos
  .filter((p) => p.estado === "entregado")
  .reduce((acumulado, p) => acumulado + p.cantidad * p.precio, 0);
console.log(
  "Total vendido (entregados):",
  totalEntregados.toLocaleString("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })
);

const top3 = pedidosConTotal
  .toSorted((a, b) => b.total - a.total)
  .slice(0, 3);
console.table(top3);

const numeroBuscado = Number(prompt("Escribe el número del pedido:"));
const encontrado = pedidosConTotal.find((p) => p.numero === numeroBuscado);
if (encontrado) {
  console.log("Pedido encontrado:", encontrado);
} else {
  console.log("El pedido " + numeroBuscado + " no existe");
}

const hayDomiciliosPendientes = pedidos.some(
  (p) => p.tipo === "domicilio" && p.estado === "pendiente"
);
console.log(
  hayDomiciliosPendientes ? "Sí hay domicilios pendientes" : "No hay domicilios pendientes"
);

const reporte = {
  fecha: new Date().toLocaleDateString("es-CO"),
  totalVendido: totalEntregados,
  pendientes: pendientes.length,
  top3: top3
};
console.log(JSON.stringify(reporte, null, 2));