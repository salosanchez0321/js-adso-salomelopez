// EJERCICIO 1
function esBisiesto(anio) {
  if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    console.log(anio + " es bisiesto");
  } else {
    console.log(anio + " NO es bisiesto");
  }
}
console.log("Año bisiesto");
esBisiesto(2024);
esBisiesto(1900);
esBisiesto(2000);

// EJERCICIO 2
console.log("Calculadora");
let num1 = Number(prompt("Primer número:"));
let num2 = Number(prompt("Segundo número:"));
let operacion = prompt("Operación (+, -, *, /):");
switch (operacion) {
  case "+":
    console.log("Resultado: " + (num1 + num2));
    break;
  case "-":
    console.log("Resultado: " + (num1 - num2));
    break;
  case "*":
    console.log("Resultado: " + (num1 * num2));
    break;
  case "/":
    if (num2 === 0) {
      alert("No se puede dividir entre cero");
    } else {
      console.log("Resultado: " + (num1 / num2));
    }
    break;
  default:
    alert("Esa operación no existe");
}

// EJERCICIO 3
console.log("IMC");
let peso = Number(prompt("Peso en kg:"));
let estatura = Number(prompt("Estatura en metros (ej: 1.65):"));
let imc = peso / estatura ** 2;
let clasificacion;
if (imc < 18.5) {
  clasificacion = "Bajo peso";
} else if (imc < 25) {
  clasificacion = "Normal";
} else if (imc < 30) {
  clasificacion = "Sobrepeso";
} else {
  clasificacion = "Obesidad";
}
console.log("IMC: " + imc.toFixed(1));
console.log("Clasificación: " + clasificacion);
