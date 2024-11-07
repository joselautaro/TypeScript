"use strict";
const sum = (a, b) => a + b;
const multip = (a, b) => a * b;
console.log(sum(5, 3));
console.log(multip(5, 3));
function resta1(a, b) {
    return a - b;
}
const operaciones = [sum, multip, resta1];
operaciones.forEach((operacion) => console.log(operacion(10, 5)));
const calcular = (a, b, c = 0) => a + b + c;
console.log(calcular(4, 5));
console.log(calcular(4, 5, 6));
//# sourceMappingURL=interfaz.js.map