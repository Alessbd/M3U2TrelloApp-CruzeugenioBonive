// Se apunta al formulario Hacer para obtener sus datos
 formHacer = document.querySelector('#formHacer')

 // Se crea la funcion de la acción del boton del formulario
 function tarjetaporhacer() {

  // Se recopila la información a enviar a la API
  const data = {
    title: tituloPorHacer.value,
    details: DescripcionPorHacer.value,
    person: responsableporhacer.value,
    deadline: Number(moment().add(entregaporhacer.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'hacer'
  }
  // Se hace una petición POST para enviar la información a la API y se le pasa el arreglo data con la información nueva
  axios.post(`${API_URL}/tareas`, data)
    .then((res) => {
      //Manda la información a la API
      crearTarea(res.data)
      //Resetea el formulario
      formHacer.reset()
    })
    .catch((err) => console.error(err))
}


// Se apunta al formulario En Progreso para obtener sus datos
formPro = document.querySelector('#formProgreso')

 // Se crea la funcion de la acción del boton del formulario
function tarjetaenprogreso(){
  
  // Se Recopila la información a enviar a la API
  const data = {
    title: tituloEnProgreso.value,
    details: DescripcionProgreso.value,
    person: responsableEnprogreso.value,
    deadline: Number(moment().add(EntregaenProgreso.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'en-progreso'
  }
  // Se hace una petición POST para enviar la información a la API y se le pasa el arreglo data con la información nueva
  axios.post(`${API_URL}/tareas`, data)
    .then((res) => {
      //Mandam la información a la API
      crearTarea(res.data)
      //Resetea el formulario
      formPro.reset()
    })
    .catch((err) => console.error(err))
}

// Se apunta al formulario Fin para obtener sus datos
formFin = document.querySelector('#formFinal')

function tarjetafinalizado(){
  
  // Recopila la información a enviar a la API
  const data = {
    title: tituloFinalizado.value,
    details: DescripcionFinalizado.value,
    person: ResponsableFinalizado.value,
    deadline: Number(moment().add(EntregaFinalizado.value, 'days').format('X')),
    created: Number(moment().format("X")),
    state: 'realizado'
  }
  // Se hace una petición POST para enviar la información a la API y se le pasa el arreglo data con la información nueva
  axios.post(`${API_URL}/tareas`, data)
    .then((res) => {
      //Manda la información a la API
      crearTarea(res.data)
      //Resetea el formulario
      formFin.reset()
    })
    .catch((err) => console.error(err))
}