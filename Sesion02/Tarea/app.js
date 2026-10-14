const segundos = Number(prompt("Escribe los segundos:"));
const horas = Math.floor(segundos / 3600);
const resto = segundos % 3600;
const minutos = Math.floor(resto / 60);
const seg = resto % 60;
console.log(horas + " h " + minutos + " min " + seg + " s");

const celsius = Number(prompt("Grados Celsius:"));
if (Number.isNaN(celsius)) {
  console.log("Escribe un número, por favor");
} else {
  const fahrenheit = celsius * 9 / 5 + 32;
  console.log(celsius + " °C = " + fahrenheit + " °F");
}

const nota1 = Number(prompt("Nota 1:"));
const nota2 = Number(prompt("Nota 2:"));
const nota3 = Number(prompt("Nota 3:"));
const promedio = (nota1 + nota2 + nota3) / 3;
console.log("Promedio: " + promedio.toFixed(1)); 