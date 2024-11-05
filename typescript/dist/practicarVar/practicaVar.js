"use strict";
let n1 = "Ana";
let e1 = 25;
let esEstudiante = true;
let calificicaciones = [85, 90, 92, 88];
let estado;
function mostrarInformacion(n1, e1, esEstudiante) {
    let estadoEstudiante = esEstudiante ? "Estudiante" : "No es estudiante";
    return `${n1} tiene ${e1} años y es ${estadoEstudiante}`;
}
console.log(mostrarInformacion(n1, e1, esEstudiante));
//# sourceMappingURL=practicaVar.js.map