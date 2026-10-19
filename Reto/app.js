const secreto = Math.floor(Math.random() * 100) + 1;
const maxIntentos = 7;
let intentos = 0;
let gano = false;

while (intentos < maxIntentos && !gano) {
  const texto = prompt(
    "Intento " + (intentos + 1) + " de " + maxIntentos +
    ": ¿qué número del 1 al 100 crees que es?"
  );
  if (texto === null) {
    break;
  }
  const numero = Number(texto);
  if (!Number.isInteger(numero) || numero < 1 || numero > 100) {
    alert("Escribe un número entero del 1 al 100. No gastaste intento.");
    continue;
  }
  intentos++;
  if (numero === secreto) {
    gano = true;
  } else if (numero < secreto) {
    alert("Más alto. Llevas " + intentos + " de " + maxIntentos + " intentos.");
  } else {
    alert("Más bajo. Llevas " + intentos + " de " + maxIntentos + " intentos.");
  }
}
if (gano) {
  alert("¡Ganaste! Lo adivinaste en " + intentos + " intentos.");
} else {
  alert("Perdiste. El número era " + secreto + ".");
}