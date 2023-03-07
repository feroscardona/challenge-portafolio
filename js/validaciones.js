

export function valida(input) {
    const tipoInput = input.dataset.tipo;
    if(validadores[tipoInput]){
        validadores[tipoInput](input)
    }
    if (input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML ="";
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML =mostrarMensajeDeError(tipoInput, input);
    }
};


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",

];
const mensajesDeError = {
    nombre:{
        valueMissing: "Campo Nombre no debe estar en blanco o vacío.",
        patternMismatch:"solo se pemite 50 caracteres"
    },
    email: {
        valueMissing: "Campo e-mail no debe estar en blanco o vacío.",
        typeMismatch: "Deber estar en formato e-mail conteniendo el caracter especial @ seguido de un dominio o proveedor seguido de un punto(.) Ejemplo: texto@texto.com"
    },
    asunto: {
        valueMissing: "Campo Asunto no debe estar en blanco o vacío.",
        patternMismatch:"solo se pemite 50 caracteres"
    },
    mensaje:{
        valueMissing: "Campo mensaje no debe estar en blanco o vacío.",
        customError:"Debe contener máximo 300 caracteres.",
    },
};
function mostrarMensajeDeError(tipoInput , input){
    let mensaje =  "";
     tipoDeErrores.forEach(error =>{
         if(input.validity[error]){
            mensaje = mensajesDeError[tipoInput][error];
             
         }   
     })
 
 
    return mensaje 
 }
 

const validadores ={
    propieda: input =>(input), 
    mensaje:input =>length(input)
}

function length(input){
   
    const currentLength = input.value.length;
    console.log(currentLength)
    let mensaje = "";
    if (currentLength > 300){
     mensaje = "Debe ser mayor de Edad"
    }
    input.setCustomValidity(mensaje)
}

