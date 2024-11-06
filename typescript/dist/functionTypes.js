"use strict";
function suma(a, b) {
    return a + b;
}
console.log(suma(5, 3));
const aplicarOperacion = (x, y, Operacion) => {
    return Operacion(x, y);
};
const resultado = aplicarOperacion(6, 3, (a, b) => a - b);
console.log(resultado);
//# sourceMappingURL=functionTypes.js.map