import { valida } from "../js/validaciones.js";

const inputs = document.querySelectorAll(".formcontato__input");

inputs.forEach((input )=>{
   
    input.addEventListener("blur", (input) => {
        
        valida(input.target)
    });
});



