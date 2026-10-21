// Definir la receta
function saludar(nombre) {
  console.log(`Hola, ${nombre} 👋`);
}

// Cocinar: llamar la función
saludar("Ana");
saludar("Luis");

function areaRectangulo(base, altura) {
  return base * altura;
}

let area = areaRectangulo(5, 3);
console.log(`El área es ${area}`);
console.log(areaRectangulo(2, 2) + areaRectangulo(3, 3));

