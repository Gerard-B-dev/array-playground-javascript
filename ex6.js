/**
 * Poniéndolo todo junto
 */

function existePez(listaPeces, pezBuscado) {
  let pezEncontrado = false;
  let i = 0;

  while (!pezEncontrado && i < listaPeces.length) {
    pezEncontrado = listaPeces[i] == pezBuscado;
    i++;
  }

  return pezEncontrado;
}

let muchosPeces = ["Dory", "Nemo", "Shipho", "Estrella"];
let heEncontradoAlPez = existePez(muchosPeces, "Estrella");

console.log("He encontrado al pez?: " + heEncontradoAlPez);

/**
 * Ejecuta el código.
 * Esta functión debería devolver "true"; puesto que "Estrella"; efectivamente está en el array.
 * Sin embargo devuelve false. Hay DOS errores:
 *
 * 1. Un error que impide ejecutar el código. Vigila la información que arroja el TERMINAL
 * 2. Un error lógico; que hace que el código no devuelve lo que debería devolver.
 *
 * Pon "chivatos" en el código para aydarte a averiguar que está sucediendo; o usa el depurador de Visual Studio para ejecutar el código paso a paso
 */
