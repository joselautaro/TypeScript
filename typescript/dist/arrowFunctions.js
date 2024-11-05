"use strict";
const sumarFlecha = (a, b) => {
    return a + b;
};
console.log(sumarFlecha(3, 4));
class Contador {
    constructor() {
        this.cuenta = 0;
        this.incrementar = () => {
            this.cuenta++;
            console.log(this.cuenta);
        };
    }
}
const miContador = new Contador();
miContador.incrementar();
miContador.incrementar();
const saludo2 = (nombre) => {
    return nombre ? `Hola, ${nombre}!` : "Hola, visitante!";
};
console.log(saludo2("Carlos"));
console.log(saludo2());
//# sourceMappingURL=arrowFunctions.js.map