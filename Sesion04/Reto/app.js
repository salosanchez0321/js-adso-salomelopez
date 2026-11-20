const numeroTabla = Number(prompt("Escribe un número para ver su tabla de multiplicar:"));

console.log("Tabla del " + numeroTabla);
for (let i = 1; i <= 10; i++) {
  console.log(numeroTabla + " x " + i + " = " + numeroTabla * i);
}

let cantidad;
do {
  cantidad = Number(prompt("¿Cuántas notas vas a ingresar?"));
} while (isNaN(cantidad) || cantidad < 1 || !Number.isInteger(cantidad));

let suma = 0;
let mayor = 0;
let menor = 5;

for (let i = 1; i <= cantidad; i++) {
  let nota;
  do {
    nota = Number(prompt("Escribe la nota " + i + " (entre 0.0 y 5.0):"));
  } while (isNaN(nota) || nota < 0 || nota > 5);

  suma = suma + nota;

  if (nota > mayor) {
    mayor = nota;
  }

  if (nota < menor) {
    menor = nota;
  }

  debugger;
}

const promedio = suma / cantidad;

console.log("Promedio: " + promedio.toFixed(2));
console.log("Nota mayor: " + mayor);
console.log("Nota menor: " + menor);