"use strict";

console.log("Condicional Switch");

let entrada = prompt("Ingresar un nombre");
switch (entrada) {
    case "ANA":
        console.log("HOLA ANA");
        break;
    case "JUAN":
        console.log("HOLA JUAN");
        break;
    default:
        console.log("¿QUIÉN SOS?");
        break;
}

console.log("Ejemplo sin condicional switch, a puro if..else")

if (entrada == "ANA") {
    console.log("HOLA ANA");
} else {
    if (entrada == "JUAN") {
        console.log("HOLA JUAN");
    } else {
        console.log("¿QUIÉN SOS?");
    }
}