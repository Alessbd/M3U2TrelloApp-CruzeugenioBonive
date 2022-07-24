// Se crea una varible para guardar la URL de la Fake API
const API_URL = "https://my-json-server.typicode.com/Alessbd/M3U2TrelloApp-CruzeugenioBonive";

//Hacemos una petición get a la API Fake utlizando los templates strings
axios
  .get(`${API_URL}/tareas`)
  .then((res) => mostrarTodaslasTareas(res.data))
  .catch((err) => console.error(err));

// Se filtra la información de la API y se mapea
const mostrarTodaslasTareas = (data) => {
  data.map((tarea) => crearTarea(tarea));
};
  // Creación de las tarjetas estáticas
const crearTarea = (tarea) => {
    //Se crea un contenedor div
  let nuevaTarea = document.createElement("div");
  nuevaTarea.classList.add("card")
  nuevaTarea.classList.add("mb-3")
  nuevaTarea.classList.add("stilotarjetas")

  let divTarjeta = document.createElement("div");
  divTarjeta.classList.add("card-body");

  //Se crea la estrucutra restante de las tarjetas
  divTarjeta.innerHTML = `<h5 class="card-title text-card-css">Título: ${tarea.title} </h5><h6 class="card-subtitle mb-2">Descripción: ${tarea.details}</h6><h6 class="card-subtitle mb-2 text-muted">Responsable: ${tarea.person}</h6><p class="card-text">Plazo: ${dateFormat(tarea.deadline)} </p><p class="card-text">Creación: ${dateFormat(tarea.created)} </p>`

  nuevaTarea.appendChild(divTarjeta);

  // Se referencia las columnas por medio de sus ID
  let columHacer = document.querySelector("#columnaporhacer");
  let columnProgreso = document.querySelector("#columnaenprogreso");
  let columFin = document.querySelector("#columnafinalizadas");

  // Se pregunta el estado de las tareas de la API y de acuerdo a ello se ubican en su columna correspondiente
  if (tarea.state === "hacer") {
    columHacer.appendChild(nuevaTarea);
  }
  if (tarea.state === "en-progreso") {
    columnProgreso.appendChild(nuevaTarea);
  }
  if (tarea.state === "realizado") {
    columFin.appendChild(nuevaTarea);
  }
};