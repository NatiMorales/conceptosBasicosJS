//declarar una variable (var - let - const)
let anioActual = 2023;
const url="https://universe.rollingcodeschool.com/";

//mostrar mensajes 
console.log(anioActual);
console.log("anioActual");
console.log("Año actual: "+anioActual+" hola mundo");

//modificar el valor de un variable
anioActual=2023+1;
console.log("Año actual: "+anioActual);
console.log(url);


document.write('<h1 class="titulo">Hola mundo '+anioActual+'</h1>');
document.write("hola mundo <br>");
document.write("hola mundo");

//ventana emergente
alert("Este es un ejemplo de una alerta");

//solicitar un número al usuario y luego sumarle 5 y por ultimo mostrar el resultado de la suma.
let numeroSolicitado = parseInt(prompt("Ingrese un número del 1 al 100"));
console.log(numeroSolicitado);
console.log("Resultado: "+(numeroSolicitado+5));
console.log(numeroSolicitado+5);
//transformar o parsear un numero de string a formato numerico
//parseInt("100");
//parseFloat("100.50");