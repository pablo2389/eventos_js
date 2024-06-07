"use strict";

console.log("Propiedaes del objeto Navigation");
const p = document.querySelector('p');
let texto = "";
texto += `<strong>Nombre de código del navegador</strong> : ${navigator.appCodeName} <br><br>`
texto += `<strong>Nombre del navegador</strong> : ${navigator.appName} <br><br>`
texto += `<strong>Cookies habilitadas</strong> : ${navigator.cookieEnabled} <br><br>`
texto += `<strong>Plataforma del Navegador</strong> : ${navigator.platform} <br><br>`
texto += `<strong>Navegador en modo en línea</strong> : ${navigator.onLine} <br><br>`
texto += `<strong>Java habilitado</strong> : ${navigator.javaEnabled()} <br><br>`
p.innerHTML = texto;





