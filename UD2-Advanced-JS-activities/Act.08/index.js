
/*
Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar
por pantalla el resultado devuelto por la función.
*/

const inputField = document.getElementById('num');
const outputArea = document.getElementById('outputArea');

inputField.addEventListener('input', () => {
    if ((inputField.value % 2) != 0) {
        outputArea.textContent = 'El número es IMPAR.';
    } else {
        outputArea.textContent = 'El número es PAR.';
    }
})