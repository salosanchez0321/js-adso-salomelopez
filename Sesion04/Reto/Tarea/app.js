let numero = Number(prompt("¿De qué número quieres la tabla de multiplicar?"));
if (isNaN(numero)) {
  alert("No es un número válido. Recarga la página e inténtalo de nuevo.");
} else {
  let resultado = "Tabla del " + numero + "\n";

  for (let i = 1; i <= 10; i++) {
    let producto = numero * i; 
    resultado += numero + " x " + i + " = " + producto + "\n";
  }
 console.log(resultado);
  alert(resultado);
}



let cantidad;
do {
  cantidad = Number(prompt("¿Cuántas notas vas a ingresar?"));
} while (isNaN(cantidad) || cantidad < 1 || !Number.isInteger(cantidad));

let suma = 0;
let mayor = 0;
let menor = 5;

for (let i = 1; i <= cantidad; i++) {
  let texto;
  let nota;

  do {
    texto = prompt("Ingresa la nota " + i + " de " + cantidad + " (entre 0.0 y 5.0):");
    nota = Number(texto);
  } while (texto === null || texto === "" || isNaN(nota) || nota < 0 || nota > 5);

  suma = suma + nota; 

  if (nota > mayor) {
    mayor = nota;
  }
  if (nota < menor) {
    menor = nota;
  }
}
let promedio = suma / cantidad;
let mensaje = "Promedio: " + promedio.toFixed(2) +
"\nNota mayor: " + mayor +
"\nNota menor: " + menor;

console.log(mensaje);
alert(mensaje);


