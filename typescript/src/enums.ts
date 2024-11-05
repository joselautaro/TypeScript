// Que son los enums?

/**
 * Los enums o enumeraciones son una caracteristica que nos permite definir un conjunto de valores constantes que tienen nombres simbolicos. Los elums hacen el codigo mas claro, y legible al representar grupos de opciones o valores finitos de manera estructurada
 * 
 * Creacion de enums
 * En typescript se puede definir un enum usando la palabra clase enum seguida del nombre de la enumeracion y las opciones entre {}. Existen dos tipos: numericos y de cadenas 
 * 
 */

// Sintaxis de un enum
enum Color{
    Rojo = 1,
    Verde,
    Azul
}
// Asignamos un valor del enum a una variable
let miColor: Color = Color.Rojo;
console.log(miColor)

// Enum de cadenas
// Definimos un Enum llamado Direccion que representa direcciones como cadenas de texto
enum Direccion{
    Arriba = "ARRIBA",
    Abajo = "ABAJO",
    Izquierda = "IZQUIERDA",
    Derecha = "DERECHA"
}

let miDireccion: Direccion = Direccion.Arriba;

console.log(miDireccion)

// Uso de enums en una funcion con condicionales
enum Semaforo{
    Rojo = "Rojo",
    Amarillo = "AMARILLO",
    Verde = "VERDE"
}

function verificarSemaforo(color: Semaforo){
    if( color === Semaforo.Rojo ){
        console.log("ALTO")
    }else if(color === Semaforo.Amarillo){
        console.log("Cuidado, empieza a frenar!!!!");
    }else if(color === Semaforo.Verde){
        console.log("Dale nomàs, avanzá!!!");
    }
}

verificarSemaforo(Semaforo.Verde)