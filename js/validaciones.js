

export function valida(input){
    const tipoInput = input.dataset.tipo
    
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }
}

const validadores ={
    nombre: (input) =>validacionNombre(input), 
}


function validacionNombre  (input){
    
    const dato = input.value
    let mensaje = ""
    if(dato ==""){
        mensaje = "El campo nombre no esta completo"
    }
    input.setCustomValidity(mensaje)
}