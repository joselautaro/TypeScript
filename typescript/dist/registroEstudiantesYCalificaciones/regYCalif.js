"use strict";
var Materia;
(function (Materia) {
    Materia["Matematicas"] = "Matematicas";
    Materia["Ciencias"] = "Ciencias";
    Materia["Historia"] = "Historia";
})(Materia || (Materia = {}));
let registroEstudiantes = [];
const agregarEstudiante = (nombre, calificaciones) => {
    const nuevoEstudiante = { nombre, calificaciones };
    registroEstudiantes.push(nuevoEstudiante);
    console.log(`Estudiante agregado: ${nombre}`);
};
const calcularPromedio = (nombre) => {
    const estudiante = registroEstudiantes.find(est => est.nombre === nombre);
    if (estudiante && estudiante.calificaciones) {
        const calificaciones = Object.keys(estudiante.calificaciones).map(key => estudiante.calificaciones[key] || 0);
        const total = calificaciones.reduce((acc, calificacion) => acc + calificacion, 0);
        return total / calificaciones.length;
    }
    else {
        console.log(`Estudiante "${nombre}" no encontrado`);
        return null;
    }
};
const estudiantesConBajoPromedio = (umbral) => {
    console.log(`Estudiantes con promedio por debajo de ${umbral}`);
    registroEstudiantes.forEach(estudiante => {
        const promedio = calcularPromedio(estudiante.nombre);
        if (promedio !== null && promedio < umbral) {
            console.log(`- ${estudiante.nombre} | Promedio: ${promedio.toFixed(2)}`);
        }
    });
};
agregarEstudiante("Ana", { [Materia.Matematicas]: 85, [Materia.Ciencias]: 78, [Materia.Historia]: 92 });
agregarEstudiante("Luis", { [Materia.Matematicas]: 60, [Materia.Ciencias]: 70, [Materia.Historia]: 85 });
agregarEstudiante("Pedro", { [Materia.Matematicas]: 90, [Materia.Ciencias]: 95 });
console.log(`Promedio de Ana: ${calcularPromedio("Ana")}`);
console.log(`Promedio de Luis: ${calcularPromedio("Luis")}`);
estudiantesConBajoPromedio(75);
//# sourceMappingURL=regYCalif.js.map