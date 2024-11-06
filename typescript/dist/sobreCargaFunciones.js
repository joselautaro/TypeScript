"use strict";
function sumatoria(a, b) {
    return a + b;
}
const resultado1 = sumatoria(5, 10);
const resultado2 = sumatoria("Hola", "Typescript");
console.log(resultado1);
console.log(resultado2);
function obtenerLongitud(valor) {
    return valor.length;
}
const longitudTexto = obtenerLongitud("TypeScript");
const longitudArray = obtenerLongitud([1, 2, 3, 4, 5, 6]);
console.log(longitudTexto);
console.log(longitudArray);
function buscarUsuario(parametro) {
    if (typeof parametro === "number") {
        return `Usuario con ID: ${parametro}`;
    }
    else if (typeof parametro === "string") {
        return `Usuario con email: ${parametro}`;
    }
    else {
        return "Parametro de busqueda no valido";
    }
}
const usuarioPorID = buscarUsuario(123);
const usuarioPorEmail = buscarUsuario("correo@ejemplo.com");
console.log(usuarioPorID);
console.log(usuarioPorEmail);
function calcularArea(a, b) {
    if (b === undefined) {
        return Math.PI * a * a;
    }
    else {
        return a * b;
    }
}
const areaCirculo = calcularArea(10);
const areaRectangulo = calcularArea(5, 12);
console.log(areaCirculo);
console.log(areaRectangulo);
//# sourceMappingURL=sobreCargaFunciones.js.map