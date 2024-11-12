import * as readline from 'readline';

import { TareaService } from './services/tareaServices';

import { EstadoTarea } from './models/estados';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function agregarTarea(){
    rl.question("Titulo de la tarea: ", titulo=>{
        rl.question("Descripcion de la tarea (opcional): ", descripcion=>{
            TareaService.agregarTarea(titulo, descripcion);
            console.log("Tarea agregada correctamente.");
            mostrarMenu();
        })
    })
}

function verTareas(){
    const tareas = TareaService.obtenerTareas();
    console.log("\n---Lista de tareas---");
    tareas.forEach((tarea, index)=>{
        console.log(`${index + 1}. Titulo: ${tarea.titulo}, Descripción: ${tarea.descripcion}, Estado: ${tarea.estado}`);
    })
    mostrarMenu();
}

function filtrarTareas(){
    rl.question("Ingrese el estado para filtrar (Pendiente, En progreso, Completada, Cancelada): ", estado =>{
        const estadoTarea = EstadoTarea[estado as keyof typeof EstadoTarea];
        if(estadoTarea){
            const tareasFiltradas = TareaService.filtrarTareasPorEstado(estadoTarea);
            console.log(`\n--- Tareas en estado ${estadoTarea} ---`);
            tareasFiltradas.forEach((tarea, index) =>{
                console.log(`${index + 1}. Titulo: ${tarea.titulo}, Descripción: ${tarea.descripcion}`);
            })
        }else{
            console.log("Estado no valido");
        }
        mostrarMenu();
    })
}

function cambiarEstadoTarea(){
    rl.question("Titulo de la tarea a modificar: ", titulo =>{
        rl.question("Nuevo estado (Pendiente, En progreso, Completada, Cancelada): ", nuevoEstado=>{
            const estadoTarea = EstadoTarea[nuevoEstado as keyof typeof EstadoTarea]
            if(estadoTarea){
                TareaService.cambiarEstado(titulo, estadoTarea);
                console.log("Estado de la tarea actualizado");
            }else{
                console.log("Estado no valido");
            }
            mostrarMenu()
        })
    })
}

function eliminarTareasCompletadas(){
    TareaService.eliminarTareasCompletadas()
    console.log("Tareas completadas eliminadas");
    mostrarMenu();
}

mostrarMenu()


function mostrarMenu(){
    console.log("\n---Menu de tareas---");
    console.log("1. Agregar una tarea");
    console.log("2. Ver todas las tareas");
    console.log("3. Filtrar tareas por estado");
    console.log("4. Cambiar el estado de una tarea");
    console.log("5. Eliminar tareas completadas");
    console.log("6. Salir\n");
    rl.question("Selecciona una opción: ", opcion =>{
        manejarOpcion(opcion);
    })
}

function manejarOpcion(opcion: string){
    switch(opcion){
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



