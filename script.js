

document.addEventListener("DOMContentLoaded",()=>{
    
    const boton = document.querySelector("[data-pdf]");
    const contenido = document.querySelector("#body")
    boton.addEventListener("click",event=>{
        event.preventDefault();
        boton.style.display="none";
        window.print()
    },false)
    contenido.addEventListener("click", event => {
        boton.style.display = "initial";
    }, false);
},false)

export const clientServices = {
    
  };