//typeof = para saber el tipo de dato

console.log(5+5+"5") //105 concateno
console.log("5"+5+5) //555 como el primero es string los demás se vuelven string automáticamente 

const nombre3 = "Ana";
let edad3 = 17;
let estatura = 1.68;
let esAprendiz = true;
let apodo;

console.log(typeof nombre, typeof edad, typeof estatura, typeof esAprendiz, typeof apodo);

console.log(7 / 2); //3.5
console.log(7 % 2); //1
console.log(2 ** 3); //8
console.log(10 + 3 * 2); //16
console.log((10 + 3) * 2); //26
console.log(0.1 + 0.2); // 0.3

console.log("5"+"5") //55
console.log("5"+5) //55
console.log(5+5) //10
console.log(5+"5") //55
console.log("5"+5+5) //555
console.log(5+5+"5") //105

console.log(typeof ("5"+"5")) //55
console.log(typeof("5"+5)) //55
console.log(typeof(5+5)) //10
console.log(typeof(5+"5")) //55
console.log(typeof("5"+5+5)) //555
console.log(typeof(5+5+"5")) //105

console.log("5" + 3); //53
console.log("5" - 3); //2
console.log("5" * 3); //15
console.log(5 == "5"); //True
console.log(5 === "5"); //False

let nombre1 = prompt("ingrese su nombre: ");
let edad1 = Number(prompt("ingrese su edad: "));
let suma= (edad1+15)
console.log("su nombre es: "+ nombre1)
console.log("y su edad incrementada es: "+ suma)
console.log(`su nota definitiva es ${nota}`)


let nombre2 = prompt("ingrese su nombre: ")
let entrada2 = Number(prompt("digite su edad: "))
if (Number.isNaN(entrada)){
    console.log("eso no es un número")
}else{
    let edad = Number(entrada)
}
console.log("su nombre es: "+ nombre)
console.log("y su edad es: "+entrada)

let nombre = prompt("digite su nombre: ");
let entrada = Number(prompt("digite su edad: "));
let edad = 0;
let nota = Number(prompt("digite su nota de JS: "));

if (Number.isNaN(entrada)) {
    console.log("esto NO es un numero");
} else {
    edad = entrada;
    console.log("su edad es: " + edad);
    let suma = edad + 15;
    console.log("su edad + 15 es: " + suma);
}

console.log("su nombre es: " + nombre);

if (Number.isNaN(nota)) {
    console.log("la nota NO es un numero");
} else {
    console.log(`el valor definitivo de la nota es: ${nota}`);
}

let nota1 = Number(prompt("digite su nota: "))
let nota2 = Number(prompt("digite su nota: "))
let nota3 = Number(prompt("digite su nota: "))

let promedio = (nota1+nota2+nota3)/3
console.log(`su nota definitiva es: ${promedio.toFixed(1)}`)

let pesos = 250000;
console.log(pesos.toLocaleString("es-CO", { style: "currency", currency: "COP" }));