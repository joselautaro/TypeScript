"use strict";
var Color;
(function (Color) {
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Verde"] = 2] = "Verde";
    Color[Color["Azul"] = 3] = "Azul";
})(Color || (Color = {}));
let miColor = Color.Rojo;
console.log(miColor);
var Direccion;
(function (Direccion) {
    Direccion["Arriba"] = "ARRIBA";
    Direccion["Abajo"] = "ABAJO";
    Direccion["Izquierda"] = "IZQUIERDA";
    Direccion["Derecha"] = "DERECHA";
})(Direccion || (Direccion = {}));
let miDireccion = Direccion.Arriba;
console.log(miDireccion);
var Semaforo;
(function (Semaforo) {
    Semaforo["Rojo"] = "Rojo";
    Semaforo["Amarillo"] = "AMARILLO";
    Semaforo["Verde"] = "VERDE";
})(Semaforo || (Semaforo = {}));
function verificarSemaforo(color) {
    if (color === Semaforo.Rojo) {
        console.log("ALTO");
    }
    else if (color === Semaforo.Amarillo) {
        console.log("Cuidado, empieza a frenar!!!!");
    }
    else if (color === Semaforo.Verde) {
        console.log("Dale nomàs, avanzá!!!");
    }
}
verificarSemaforo(Semaforo.Verde);
//# sourceMappingURL=enums.js.map