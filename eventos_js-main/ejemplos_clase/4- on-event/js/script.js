"use strict";

const boton = document.getElementById("btnPrincipal");

console.log("Evento de onclick con on-event");

boton.onclick = () => { 
    console.log("Respuesta evento on-event");
    boton.classList.add("clicked");
}

boton.onmouseout = () => { 
    console.log("Respuesta evento on-event");
    boton.classList.remove("clicked");
}

