console.log("Hola mundo");

var nombre = prompt("Por favor, ingresa tu nombre: ");
var apellido = prompt("Por favor, ingresa tu apellido:");
var edad = prompt ("Por favor, ingresa tu edad");

var edadEn10Años = edad + 10;

alert ("¡Hola" + nombre +" " + apellido + " !Tendrás " + edadEn10Años + "años en 10 años más.");

var base = parseFloat (prompt("Por favor, ingresa la base del rectángulo:"));
var altura = parseFloat (prompt("Por favor, ingresa la altura del rectángulo"));

var area = base * altura;

alert ("El área del rectágulo es: " + area);

// Crear un array con números
let numeros = [1, 2, 3, 4, 5];
let total = numeros [0] + numeros[1] + numeros[2] + numeros[3] + numeros [4];

alert(`La suma de los valores de array es: ${total}`);

// Matriz 2x2

let matriz = [[1,2][3,4]];

alert(`La matriz es:
${matriz[0][0]} ${matriz[0][1]}
${matriz[1][0]} ${matriz[1][1]}`);

