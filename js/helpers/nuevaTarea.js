// Se apunta al formulario Hacer para obtener sus datos
 formHacer = document.querySelector('#formHacer')

 // Se crea la funcion de la acción del boton del formulario
 function tarjetaporhacer() {
  // Comprueba de que los campos contengan datos para guardarlos
  if((TituloPorHacer.value.length === 0) || (DescripcionPorHacer.value.length === 0) || (DescripcionPorHacer.value.length <= 10) ||  (ResponsablePorHacer.value === '') || (EntregaPorHacer.value === '') || (ResponsablePorHacer.value=== '--Seleccionar--') || (EntregaPorHacer.value=== '--Seleccionar--')){
    alert("Debe llenar todos los campos o realizar una descrpción más detallada")
  }else{
    // Se recopila la información a enviar a la API
    const data = {
      title: TituloPorHacer.value,
      details: DescripcionPorHacer.value,
      person: ResponsablePorHacer.value,
      deadline: Number(moment().add(EntregaPorHacer.value, 'days').format('X')),
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
}


// Se apunta al formulario En Progreso para obtener sus datos
formPro = document.querySelector('#formProgreso')

 // Se crea la funcion de la acción del boton del formulario
function tarjetaenprogreso(){
  // Comprueba de que los campos contengan datos para guardarlos
  if((TituloEnProgreso.value.length === 0) || (DescripcionProgreso.value.length === 0) || (DescripcionProgreso.value.length <= 10) ||  (ResponsableEnprogreso.value === '') || (EntregaEnProgreso.value=== '') || (ResponsableEnprogreso.value=== '--Seleccionar--') || (EntregaEnProgreso.value=== '--Seleccionar--')){
    alert("Debe llenar todos los campos o realizar una descrpción más detallada")
  }else{  
      // Se Recopila la información a enviar a la API
      const data = {
        title: TituloEnProgreso.value,
        details: DescripcionProgreso.value,
        person: ResponsableEnprogreso.value,
        deadline: Number(moment().add(EntregaEnProgreso.value, 'days').format('X')),
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
}

// Se apunta al formulario Fin para obtener sus datos
formFin = document.querySelector('#formFinal')

function tarjetafinalizado(){
  // Comprueba de que los campos contengan datos para guardarlos
  if((TituloFinalizado.value.length === 0) || (DescripcionFinalizado.value.length === 0) || (DescripcionFinalizado.value.length <= 10) ||  (ResponsableFinalizado.value === '') || (EntregaFinalizado.value=== '') || (ResponsableFinalizado.value=== '--Seleccionar--') || (EntregaFinalizado.value=== '--Seleccionar--')){
    alert("Debe llenar todos los campos o realizar una descrpción más detallada")
  }else{  
    // Recopila la información a enviar a la API
    const data = {
      title: TituloFinalizado.value,
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
}