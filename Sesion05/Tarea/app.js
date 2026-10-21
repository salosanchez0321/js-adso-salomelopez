function esBisiesto(anio) {
  if (anio % 400 === 0) {
    return true;
  }
  if (anio % 100 === 0) {
    return false;
  }
  if (anio % 4 === 0) {
    return true;
  }
  return false;
}


function mayorDeTres(a, b, c) {
  let mayor = a;
  if (b > mayor) {
    mayor = b;
  }
  if (c > mayor) {
    mayor = c;
  }
  return mayor;
}


const precioFinal = (precio, descuento = 0) => {
  return precio - (precio * descuento / 100);
};


console.log("esBisiesto");
let anios = [2000, 1900, 2024, 2023, 2100];
for (let i = 0; i < anios.length; i++) {
  if (esBisiesto(anios[i])) {
    console.log(anios[i] + " es bisiesto");
  } else {
    console.log(anios[i] + " NO es bisiesto");
  }
}

console.log("mayorDeTres");
console.log("mayorDeTres(3, 7, 5) =", mayorDeTres(3, 7, 5));
console.log("mayorDeTres(10, 2, 4) =", mayorDeTres(10, 2, 4));
console.log("mayorDeTres(1, 2, 9) =", mayorDeTres(1, 2, 9));
console.log("mayorDeTres(5, 5, 5) =", mayorDeTres(5, 5, 5));
console.log("mayorDeTres(8, 8, 3) =", mayorDeTres(8, 8, 3));
console.log("mayorDeTres(-1, -5, -3) =", mayorDeTres(-1, -5, -3));

console.log("precioFinal");
console.log("precioFinal(100000, 20) =", precioFinal(100000, 20));
console.log("precioFinal(50000, 10) =", precioFinal(50000, 10));
console.log("precioFinal(80000) =", precioFinal(80000));
console.log("precioFinal(200000, 50) =", precioFinal(200000, 50));