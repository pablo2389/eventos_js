"use strict";

const boton = document.getElementById("btnPrincipal")

console.log("addEventListener con funciones declaradas");

function respuestaClick() {
    console.log("Respuesta evento click");
}
boton.addEventListener("click", respuestaClick)

console.log("addEventListener con funciones anónima");

boton.addEventListener("click", function() {
    console.log("Respuesta evento click anonimo");
})


console.log("addEventListener con funciones arrow");

boton.addEventListener("click", () => {
    console.log("Respuesta evento click arrow");
})
