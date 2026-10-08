// const son los datos que no cambian
const nombre = "Salomé López Sánchez";
const programa = "ADSO";
const ficha = "3534466";
const frase = "El código es mi superpoder";

// let son los datos que cambian
let ciudad = "Cali";

// Las comillas invertidas las uso para poder utilizar ${variable} dentro del texto
console.log(`
Hola, soy ${nombre}
${programa} · Ficha ${ficha}
Vivo en ${ciudad}
"${frase}"`);

// Voy a cambiar la ciudad, ya que si se hace un cambio con const da error
ciudad = "Medellín";
console.log(`Ahora vivo en ${ciudad}`);