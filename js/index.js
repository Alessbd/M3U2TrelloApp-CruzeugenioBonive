let Porhacertit = document.getElementById('tituloPorHacer')
let ResponsableporHac = document.getElementById('responsableporhacer')
let Fechaporhacer = document.getElementById('entregaporhacer')

let Enprogresotit = document.getElementById('tituloEnProgreso')
let ResponsableProg = document.getElementById('responsableEnprogreso')
let FechaProg = document.getElementById('EntregaenProgreso')

let Finalizadotit = document.getElementById('tituloFinalizado')
let ResponsableFin = document.getElementById('ResponsableFinalizado')
let FechaFin = document.getElementById('EntregaFinalizado')


function tarjetaporhacer(){
    if((Porhacertit.value.length === 0) || (ResponsableporHac.value === '') || (Fechaporhacer.value=== '') || (ResponsableporHac.value=== '--Seleccionar--') || (Fechaporhacer.value=== '--Seleccionar--')){
        alert("Debe llenar todos los campos")
    }else{
        document.getElementById("columnaporhacer").innerHTML+= '<div class="card mb-3" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+Porhacertit.value+'</h5><h6 class="card-subtitle mb-2 text-muted">'+ResponsableporHac.value+'</h6><p class="card-text">'+Fechaporhacer.value+'</p></div></div>'
        document.getElementById('tituloPorHacer').value = ''
        document.getElementById('responsableporhacer').value = ''
        document.getElementById('entregaporhacer').value = ''
    }
}

function tarjetaenprogreso(){
    if((Enprogresotit.value.length === 0) || (ResponsableProg.value === '') || (FechaProg.value=== '') || (ResponsableProg.value=== '--Seleccionar--') || (FechaProg.value=== '--Seleccionar--')){
        alert("Debe llenar todos los campos")
    }else{
        document.getElementById("columnaenprogreso").innerHTML+= '<div class="card mb-3" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+Enprogresotit.value+'</h5><h6 class="card-subtitle mb-2 text-muted">'+ResponsableProg.value+'</h6><p class="card-text">'+FechaProg.value+'</p></div></div>'
        document.getElementById('tituloEnProgreso').value = ''
        document.getElementById('responsableEnprogreso').value = ''
        document.getElementById('EntregaenProgreso').value = ''
    }    
}

function tarjetafinalizado(){
    if((Finalizadotit.value.length === 0) || (ResponsableFin.value === '') || (FechaFin.value=== '') || (ResponsableFin.value=== '--Seleccionar--') || (FechaFin.value=== '--Seleccionar--')){
        alert("Debe llenar todos los campos")
    }else{
        document.getElementById("columnafinalizadas").innerHTML+= '<div class="card mb-3" style="width: 18rem;"><div class="card-body"><h5 class="card-title">'+Finalizadotit.value+'</h5><h6 class="card-subtitle mb-2 text-muted">'+ResponsableFin.value+'</h6><p class="card-text">'+FechaFin.value+'</p></div></div>'
        document.getElementById('tituloFinalizado').value = ''
        document.getElementById('ResponsableFinalizado').value = ''
        document.getElementById('EntregaFinalizado').value = ''
    }    
}
