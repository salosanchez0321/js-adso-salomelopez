document.querySelector("#nombre").textContent = "Salomé López"
document.querySelector(".rol").textContent = "Aprendiz ADSO"
document.querySelector(".rol").classList.add("Destacado");

const habilidades = ["HTML","CSS","JAVASCRIPT"]
const listaHabilidades = document.querySelector("#habilidades")

for (const habilidad of habilidades){
    listaHabilidades.innerHTML +=`<li>${habilidad}</li>`
}

document.querySelector("#btnTema").addEventListener("click", () => { document.body.classList.toggle("oscuro");});

let valor = 0
const pantalla = document.querySelector("#pantalla");

document.querySelector("#btnSumar").addEventListener("click", ()=> {
    valor++;
    pantalla.textContent = valor;
})
document.querySelector("#btnRestar").addEventListener("click", ()=> {
    if(valor > 0){
        valor--;
        pantalla.textContent = valor;
    }
})

const inputProducto= document.querySelector("#producto");

inputProducto.addEventListener("keydown", (e) => {
    console.log("Presionaste:", e.key);
});


// const lista = document.querySelector("#lista")
// const li = document.createElement("li")
// li.textContent = "Arroz"
// lista.append(li)

//Datos + render

const compras = [];

function render() {
  lista.innerHTML = "";                 // 1. borrar el tablero
  for (const producto of compras) {     // 2. pintar desde los datos
    const li = document.createElement("li");
    li.textContent = producto;

    const borrar = document.createElement("button");
    borrar.textContent = "❌";
    borrar.addEventListener("click", () => {
      compras.splice(compras.indexOf(producto), 1);
      render();
    });

    li.append(borrar);
    lista.append(li);
  }
}

function agregar() {
  const texto = inputProducto.value.trim();
  if (texto === "") return;
  compras.push(texto);
  inputProducto.value = "";
  render();
}

document.querySelector("#btnAgregar").addEventListener("click", agregar);
inputProducto.addEventListener("keydown", (e) => {
  if (e.key === "Enter") agregar();
});

