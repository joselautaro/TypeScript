"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const tareaServices_1 = require("./services/tareaServices");
const estados_1 = require("./models/estados");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function agregarTarea() {
    rl.question("Titulo de la tarea: ", titulo => {
        rl.question("Descripcion de la tarea (opcional): ", descripcion => {
            tareaServices_1.TareaService.agregarTarea(titulo, descripcion);
            console.log("Tarea agregada correctamente.");
            mostrarMenu();
        });
    });
}
function verTareas() {
    const tareas = tareaServices_1.TareaService.obtenerTareas();
    console.log("\n---Lista de tareas---");
    tareas.forEach((tarea, index) => {
        console.log(`${index + 1}. Titulo: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
    });
    mostrarMenu();
}
function filtrarTareas() {
    rl.question("Ingrese el estado para filtrar (Pendiente, En progreso, Completada, Cancelada): ", estado => {
        const estadoTarea = estados_1.EstadoTarea[estado];
        if (estadoTarea) {
            const tareasFiltradas = tareaServices_1.TareaService.filtrarTareasPorEstado(estadoTarea);
            console.log(`\n--- Tareas en estado ${estadoTarea} ---`);
            tareasFiltradas.forEach((tarea, index) => {
                console.log(`${index + 1}. Titulo: ${tarea.titulo}, Descripción: ${tarea.descripcion}`);
            });
        }
        else {
            console.log("Estado no valido");
        }
        mostrarMenu();
    });
}
function cambiarEstadoTarea() {
    rl.question("Titulo de la tarea a modificar: ", titulo => {
        rl.question("Nuevo estado (Pendiente, En progreso, Completada, Cancelada): ", nuevoEstado => {
            const estadoTarea = estados_1.EstadoTarea[nuevoEstado];
            if (estadoTarea) {
                tareaServices_1.TareaService.cambiarEstado(titulo, estadoTarea);
                console.log("Estado de la tarea actualizado");
            }
            else {
                console.log("Estado no valido");
            }
            mostrarMenu();
        });
    });
}
function eliminarTareasCompletadas() {
    tareaServices_1.TareaService.eliminarTareasCompletadas();
    console.log("Tareas completadas eliminadas");
    mostrarMenu();
}
mostrarMenu();
function mostrarMenu() {
    console.log("\n---Menu de tareas---");
    console.log("1. Agregar una tarea");
    console.log("2. Ver todas las tareas");
    console.log("3. Filtrar tareas por estado");
    console.log("4. Cambiar el estado de una tarea");
    console.log("5. Eliminar tareas completadas");
    console.log("6. Salir\n");
    rl.question("Selecciona una opción: ", opcion => {
        manejarOpcion(opcion);
    });
}
function manejarOpcion(opcion) {
    switch (opcion) {
        case "1":
            agregarTarea();
            break;
        case "2":
            verTareas();
            break;
        case "3":
            filtrarTareas();
            break;
        case "4":
            cambiarEstadoTarea();
            break;
        case "5":
            eliminarTareasCompletadas();
            break;
        case "6":
            rl.close();
            console.log("Aplicación cerrada");
            break;
        default:
            console.log("Opción no válida. Intente nuevamente.");
            mostrarMenu();
    }
}
//# sourceMappingURL=main.js.map