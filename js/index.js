let Porhacertit = document.getElementById('tituloPorHacer')
let Deschacer = document.getElementById('DescripcionPorHacer')
let ResponsableporHac = document.getElementById('responsableporhacer')
let Fechaporhacer = document.getElementById('entregaporhacer')

let Enprogresotit = document.getElementById('tituloEnProgreso')
let Descprogreso = document.getElementById('DescripcionProgreso')
let ResponsableProg = document.getElementById('responsableEnprogreso')
let FechaProg = document.getElementById('EntregaenProgreso')

let Finalizadotit = document.getElementById('tituloFinalizado')
let Descfinalizado = document.getElementById('DescripcionFinalizado')
let ResponsableFin = document.getElementById('ResponsableFinalizado')
let FechaFin = document.getElementById('EntregaFinalizado')


function tarjetaporhacer(){
    if((Porhacertit.value.length === 0) || (Deschacer.value.length === 0) || (Deschacer.value.length <= 10) ||  (ResponsableporHac.value === '') || (Fechaporhacer.value=== '') || (ResponsableporHac.value=== '--Seleccionar--') || (Fechaporhacer.value=== '--Seleccionar--')){
        alert("Debe llenar todos los campos o realizar una descrpción más detallada")
    }else{
        document.getElementById("columnaporhacer").innerHTML+= '<div class="card mb-3" style="width: 18rem;"><div class="card-body"><h5 class="card-title text-card-css">Título: '+Porhacertit.value+'</h5><h6 class="card-subtitle mb-2">Descripción: '+Deschacer.value+'</h6><h6 class="card-subtitle mb-2 text-muted">Responsable: '+ResponsableporHac.value+'</h6><p class="card-text">Fecha de Entrega: '+Fechaporhacer.value+'</p></div></div>'
        document.getElementById('tituloPorHacer').value = ''
        document.getElementById('DescripcionPorHacer').value = ''
        document.getElementById('responsableporhacer').value = ''
        document.getElementById('entregaporhacer').value = ''
    }
}

function tarjetaenprogreso(){
    if((Enprogresotit.value.length === 0) || (Descprogreso.value.length === 0) || (Descprogreso.value.length <= 10) || (ResponsableProg.value === '') || (FechaProg.value=== '') || (ResponsableProg.value=== '--Seleccionar--') || (FechaProg.value=== '--Seleccionar--')){
        alert("Debe llenar todos los campos o realizar una descrpción más detallada")
    }else{
        document.getElementById("columnaenprogreso").innerHTML+= '<div class="card mb-3" style="width: 18rem;"><div class="card-body"><h5 class="card-title text-card-css">Título: '+Enprogresotit.value+'</h5><h6 class="card-subtitle mb-2">Descripción: '+Descprogreso.value+'</h6><h6 class="card-subtitle mb-2 text-muted">Responsable: '+ResponsableProg.value+'</h6><p class="card-text">Fecha de Entrega: '+FechaProg.value+'</p></div></div>'
        document.getElementById('tituloEnProgreso').value = ''
        document.getElementById('DescripcionProgreso').value = ''
        document.getElementById('responsableEnprogreso').value = ''
        document.getElementById('EntregaenProgreso').value = ''
    }    
}

function tarjetafinalizado(){
    if((Finalizadotit.value.length === 0) || (Descfinalizado.value.length === 0) || (Descfinalizado.value.length <= 10) || (ResponsableFin.value === '') || (FechaFin.value=== '') || (ResponsableFin.value=== '--Seleccionar--') || (FechaFin.value=== '--Seleccionar--')){
        alert("Debe llenar todos los campos o realizar una descrpción más detallada")
    }else{
        document.getElementById("columnafinalizadas").innerHTML+= '<div class="card mb-3" style="width: 18rem;"><div class="card-body"><h5 class="card-title text-card-css">Título: '+Finalizadotit.value+'</h5><h6 class="card-subtitle mb-2">Descripción: '+Descfinalizado.value+'</h6><h6 class="card-subtitle mb-2 text-muted">Responsable: '+ResponsableFin.value+'</h6><p class="card-text">Fecha de Entrega: '+FechaFin.value+'</p></div></div>'
        document.getElementById('tituloFinalizado').value = ''
        document.getElementById('DescripcionFinalizado').value = ''
        document.getElementById('ResponsableFinalizado').value = ''
        document.getElementById('EntregaFinalizado').value = ''
    }    
}
