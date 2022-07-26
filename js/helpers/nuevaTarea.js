// Apuntamos al formulario para crear la nueva tarea del HTML
const formHa = document.querySelector('#formHacer');

formHa.addEventListener('submit', (ev) => {
  // Evitamos que la pagina se recargue cuando se envian los datos
  ev.preventDefault();
  const formDatosH = ev.target;
  
  // Recopilamos la información a enviar a la API
  const dataH = {
    title: formDatosH.tituloPorHacer.value,
    details: formDatosH.DescripcionPorHacer.value,
    person: formDatosH.responsableporhacer.value,
    // deadline: formData.deadLineTask.value,
    deadline: Number(moment().add(formDatosH.entregaporhacer.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'hacer'
  };
  // Hacemos una petición POST para enviar la información a la API y le pasamos el arreglo data con la información nueva
  axios.post(`${API_URL}/tareas`, dataH)
    .then((res) => {
      //Mandamos la información a la API
      crearTarea(res.dataH);
      //Reseteamos el formulario
      formDatosH.reset();
    })
    .catch((err) => console.error(err));
});


const formPro = document.querySelector('#formProgreso');

formPro.addEventListener('submit', (ev) => {
  // Evitamos que la pagina se recargue cuando se envian los datos
  ev.preventDefault();
  const formDatosP = ev.target;
  
  // Recopilamos la información a enviar a la API
  const dataP = {
    title: formDatosP.tituloEnProgreso.value,
    details: formDatosP.DescripcionProgreso.value,
    person: formDatosP.responsableEnprogreso.value,
    // deadline: formData.deadLineTask.value,
    deadline: Number(moment().add(formDatosP.EntregaenProgreso.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'en-progreso'
  };
  // Hacemos una petición POST para enviar la información a la API y le pasamos el arreglo data con la información nueva
  axios.post(`${API_URL}/tareas`, dataP)
    .then((res) => {
      //Mandamos la información a la API
      crearTarea(res.dataP);
      //Reseteamos el formulario
      formDatosP.reset();
    })
    .catch((err) => console.error(err));
});


const formFin = document.querySelector('#formFinal');

formFin.addEventListener('submit', (ev) => {
  // Evitamos que la pagina se recargue cuando se envian los datos
  ev.preventDefault();
  const formDatosF = ev.target;
  
  // Recopilamos la información a enviar a la API
  const dataF = {
    title: formDatosF.tituloFinalizado.value,
    details: formDatosF.DescripcionFinalizado.value,
    person: formDatosF.ResponsableFinalizado.value,
    // deadline: formData.deadLineTask.value,
    deadline: Number(moment().add(formDatosF.EntregaFinalizado.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'realizado'
  };
  // Hacemos una petición POST para enviar la información a la API y le pasamos el arreglo data con la información nueva
  axios.post(`${API_URL}/tareas`, dataF)
    .then((res) => {
      //Mandamos la información a la API
      crearTarea(res.dataF);
      //Reseteamos el formulario
      formDatosF.reset();
    })
    .catch((err) => console.error(err));
});