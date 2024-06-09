"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* 1 - Enunciado

Transforme todos los eventos a continuación a eventos con on-event
Verifique que en la consola no figura ningún error en alguno de ellos
Verifique que en la consola sigan apereciendo los mensajes de log

*/
/* (primer ejercicio)*/
const boton = document.querySelector("button");

boton.addEventListener("click", () => {
    console.log("Respuesta evento click");
    boton.className = "btnClick";
})

boton.onclick =() => {
    console.log("respuesta de evento");
    boton.className = "btnClick;"
};

/*--------------------------------------------------------------------------*/

/* (segundo ejercicio)  */
boton.addEventListener("mouseover", () => {
    console.log("Respuesta evento mouseover");
    boton.className = "btnOver";
})


boton .onmouseover =()=>{
    console.log("respuesta de evento mouseover");
    boton.className="btnOver";
};
/*---------------------------------------------------------------------------- */


boton.addEventListener("mouseout", () => {
    console.log("Respuesta evento mouseout");
    boton.className = "btnOut";
})
 

boton . onmouseout =()=>{
    console.log("respuesta de evento mouseout");
    boton.className = "btnOut;"
}

/* 2 - Enunciado

Cree un evento que capture cuando cambia la caja de seleccion
Utilice el ejemplo de clase de modo "white y black" para guiarse
en como capturar este evento y además como capturar el valor
actual seleccionado en la caja de seleccion.

*/

const select = document.querySelector( "select");
const body = document.querySelector("body");
console.log(body)
console.log(select)
function update(selection) {
    if (selection =="efectivo") {document.body.style.backgroundColor = "red"}
    else if(selection === "tarjeta") {
        document.body.style.backgroundColor = "blue";}
        else if (selection =="transferencia") {
            document.body.style.backgroundColor="yellow";
        }else{
            document.body.style.backgroundColor="white";
        }

console.log("forma de pago seleccionada",selection);

}
select.onchange =() => {
    update(select.value)
};

/* ----------------------------------------------------------------------------- */
/*3 -/ Enunciado 

Cree un evento que capture cuando haya finalizado de ingresas
su nombre en el elemento "input". Deberá con un alert informar
el nombre ingresado al finalizar su ingreso.
PISTA: Debe utilizar el mismo tipo de evento que en el ejercicio
anterior.

*/




const nombreInput = document.querySelector("input");

nombreInput.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
        const nombreIngresado = nombreInput.value;
        alert(`¡Hola, ${nombreIngresado}!`);
    }
});
