document.getElementById("titulo").textContent = "Tareas de Salomé";

const campo = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const btnTema = document.getElementById("btnTema");
const contador = document.getElementById("contador");
const lista = document.getElementById("lista");

let tareas = [];
let siguienteId = 1;

function agregarTarea() {
  const texto = campo.value.trim();

  if (texto === "") {
    campo.classList.add("error");
    return;
  }

  campo.classList.remove("error");
  tareas.push({ id: siguienteId, texto: texto, hecha: false });
  siguienteId++;

  campo.value = "";
  campo.focus();
  render();
}

function alternarHecha(id) {
  const tarea = tareas.find(function (t) {
    return t.id === id;
  });
  tarea.hecha = !tarea.hecha;
  render();
}

function eliminarTarea(id) {
  tareas = tareas.filter(function (t) {
    return t.id !== id;
  });
  render();
}

function render() {
  lista.innerHTML = "";

  tareas.forEach(function (tarea) {
    const li = document.createElement("li");
    if (tarea.hecha) {
      li.classList.add("hecha");
    }

    const texto = document.createElement("span");
    texto.textContent = tarea.texto;
    texto.addEventListener("click", function () {
      alternarHecha(tarea.id);
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "❌";
    btnEliminar.addEventListener("click", function () {
      eliminarTarea(tarea.id);
    });

    li.appendChild(texto);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });

  const pendientes = tareas.filter(function (t) {
    return !t.hecha;
  }).length;
  contador.textContent = pendientes + " pendientes de " + tareas.length;
}

btnAgregar.addEventListener("click", agregarTarea);

campo.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    agregarTarea();
  }
});

campo.addEventListener("input", function () {
  campo.classList.remove("error");
});

btnTema.addEventListener("click", function () {
  const esOscuro = document.body.classList.toggle("oscuro");
  btnTema.textContent = esOscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
});

render();