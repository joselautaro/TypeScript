enum EstadoTarea{
    Pendiente = "PENDIENTE",
    EnProgreso = "EN_PROGRESO",
    Completada = "COMPLETADA"
}

type Tarea = {
    titulo: string
    estado: EstadoTarea
}

let listaDeTareas: Tarea[] = [];

const agregarTarea = (titulo: string): void =>{
    const nuevaTarea: Tarea = {
        titulo, 
        estado: EstadoTarea.Pendiente
    }
    listaDeTareas.push(nuevaTarea)
    console.log(`Tarea agregada: ${titulo}`);
}

const cambiarEstadoTarea = (titulo: string, nuevoEstado: EstadoTarea): void =>{
    const tarea = listaDeTareas.find(t => t.titulo === titulo)

    if(tarea){
        tarea.estado = nuevoEstado;
        console.log(`Estado de la tarea "${titulo}" cambiado a ${nuevoEstado}`);
    }else{
        console.log(`Tarea "${titulo}" no encontrada`);
    }
}

const mostrarTareaPorEstado = (estado: EstadoTarea): void =>{
        console.log(`Tareas en estado ${estado}`);

        listaDeTareas
            .filter(tarea => tarea.estado === estado)
            .forEach(tarea => console.log(`- ${tarea.titulo}`))
}

const eliminarTarea = (titulo: string): void => {
    listaDeTareas = listaDeTareas.filter(tarea => tarea.titulo !== titulo)
    console.log(`Tarea "${titulo}" eliminada`);
}

agregarTarea("Estudiar typescript")
agregarTarea("Completar el proyecto de Enums")
cambiarEstadoTarea("Estudiar Typescript", EstadoTarea.EnProgreso);
mostrarTareaPorEstado(EstadoTarea.Pendiente)
mostrarTareaPorEstado(EstadoTarea.EnProgreso)
eliminarTarea("Completar el proyecto de enums")
mostrarTareaPorEstado(EstadoTarea.Pendiente)