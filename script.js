// ¡Aplica tus conocimientos en programación para resolver el siguiente problema!

// Instrucciones:

// Crear un programa en PSeInt o JavaScript que realice lo siguiente:
// Debe solicitar al usuario 3 números y guardarlos.
// Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
// Debe imprimir los números ordenados de mayor a menor, y de menor a mayor.
// Debe ser capaz de identificar si los números son iguales e imprimir un mensaje diciendo que los números son iguales.
// Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
// 4, 4, 2.
// 4, 4, 2.
// 2, 4, 4.
// 4, 2, 4.
// 4, 4, 2.
// 2, 4, 4.
// 2, 4, 4.
// 4, 4, 2.
// 2, 4, 4.
// Pruébalo con las combinaciones de números que se te ocurran.
// Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub.
// Colócalo en un repositorio llamado “logica-programacion-1”

let numeros = [];

function solicitarNumeros() {
  for (let i = 0; i < 3; i++) {
    numeros.push(parseInt(prompt("Ingresar numero")));
  }
}
solicitarNumeros();

function ordenarNumeros() {
  let posicion = 0;

  if (numeros[0] === numeros[1] && numeros[0] === numeros[2]) {
    console.log("Todos los numeros son iguales");
  } else {
    for (let i = 0; i < numeros.length; i++) {
      for (let j = 0; j < numeros.length - 1; j++) {
        if (numeros[j] > numeros[j + 1]) {
          posicion = numeros[j];
          numeros[j] = numeros[j + 1];
          numeros[j + 1] = posicion;
        }
      }
    }
    console.log(numeros.toReversed());
    console.log(numeros);
  }
}
ordenarNumeros();
