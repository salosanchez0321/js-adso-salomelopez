let nombre = prompt("Nombre del aprendiz:");
let nota = Number(prompt("Nota de 0.0 a 5.0:"));

if (isNaN(nota)) {
  alert("La nota debe ser un número");
} else if (nota < 0 || nota > 5) {
  alert("La nota debe estar entre 0.0 y 5.0");
} else {
  let resultado;

  if (nota >= 4.6) {
    resultado = "Excelente";
  } else if (nota >= 4.0) {
    resultado = "Sobresaliente";
  } else if (nota >= 3.0) {
    resultado = "Aprobado";
  } else {
    resultado = "No aprobado";
  }

  console.log("Nombre: " + nombre);
  console.log("Nota: " + nota.toFixed(1));
  console.log("Resultado: " + resultado);
  alert("Resultado: " + resultado);
}