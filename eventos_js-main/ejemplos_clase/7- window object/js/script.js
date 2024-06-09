"use strict";

console.log("Métodos del objeto window");
const bLog = document.querySelector('#log');
const bAlert = document.querySelector('#alert');
const bPrompt = document.querySelector('#prompt');
const bConfirm = document.querySelector('#confirm');
const bOpen = document.querySelector('#open');

bLog.onclick = () => {
    console.log("¡Método console.log disparado!");
}

bAlert.onclick = () => {
    alert("¡Método alert disparado!");
}

bPrompt.onclick = () => {
    const nombreIngresado = prompt("Ingrese su nombre");
}

bConfirm.onclick = () => {
    const respuesta = confirm("¿Javascript es el lenguaje de la Web?");
    if(respuesta == true) {
        alert("Si, lo es");
    }
    else {
        alert("No lo creo");
    }
}

bOpen.onclick = () => {
    open("http://www.inove.com.ar"); 
}






