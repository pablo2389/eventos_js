"use strict";

console.log("Sintaxis del operador ternario")

const llueve = true;
const actividadTechada = "Leer un libro";
const actividadAireLibre = "Andar en bici";

const variable = llueve ? actividadTechada : actividadAireLibre
console.log(`Hoy voy a: ${variable}`)


console.log("De condicional 'if' a operador ternario")
const miEdad = 24;

if (miEdad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

const mayorEdad = (miEdad > 18) ? "Mayor edad" : "Menor edad";
console.log(mayorEdad);

console.log("Manejo de valores null o undefined")

const saludo = persona => {
    const nombre = persona ? persona.nombre : "desconocido"
    return `Hola, ${nombre}`
}
 
console.log(saludo({nombre: "Alicia"}));  // "Hola, Alicia"
console.log(saludo(null));             // "Hola, desconocido"
console.log(saludo(undefined));             // "Hola, desconocido"


console.log("Modifijar el string que se concatena en una frase")

const diaFeriado = true;
const pago = "Hoy debo pagar "  + ( diaFeriado ? "19 pesos" : "15 pesos");
console.log(pago);


console.log("Agrupar varios operadores ternarios juntos")

const a = 11;
const numeroObtenido = a == 5 ? 'Cinco' :
                    a == 7 ? 'Siete':
                    a == 11 ? 'Once':
                    a == 15 ? 'Quince':
                    'Otro Número';

console.log(numeroObtenido);
