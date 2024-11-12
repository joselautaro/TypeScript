"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarea = void 0;
const estados_1 = require("./estados");
class Tarea {
    constructor(titulo, descripcion = '', estado = estados_1.EstadoTarea.Pendiente) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
    }
}
exports.Tarea = Tarea;
//# sourceMappingURL=tarea.js.map