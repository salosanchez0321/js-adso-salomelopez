const textoJSON = `[
  {"titulo": "Spider-Man: Into the Spider-Verse", "genero": "Animación", "anio": 2018, "calificacion": 8.4},
  {"titulo": "Coco", "genero": "Animación", "anio": 2017, "calificacion": 8.4},
  {"titulo": "Parásitos", "genero": "Drama", "anio": 2019, "calificacion": 8.5},
  {"titulo": "Joker", "genero": "Drama", "anio": 2019, "calificacion": 8.4},
  {"titulo": "Encanto", "genero": "Animación", "anio": 2021, "calificacion": 7.2},
  {"titulo": "Dune", "genero": "Ciencia ficción", "anio": 2021, "calificacion": 8.0}
]`;

const peliculas = JSON.parse(textoJSON);
console.log("1. Arreglo:", peliculas);


const animacion = peliculas.filter((p) => p.genero === "Animación");
const desde2018 = peliculas.filter((p) => p.anio >= 2018);
console.log("2a. Animación:", animacion);
console.log("2b. Desde 2018:", desde2018);


const titulosMayuscula = peliculas.map((p) => p.titulo.toUpperCase());
console.log("3. Títulos en mayúscula:", titulosMayuscula);


const suma = peliculas.reduce((acumulado, p) => acumulado + p.calificacion, 0);
const promedio = suma / peliculas.length;
console.log("4. Calificación promedio:", promedio.toFixed(2));


const top3 = peliculas
  .toSorted((a, b) => b.calificacion - a.calificacion)
  .slice(0, 3);
const top3Texto = JSON.stringify(top3, null, 2);
console.log("5. Top 3:\n" + top3Texto);

