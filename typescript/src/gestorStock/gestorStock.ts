// Importar el modulo "realine" de node.js para manejar la entrada y salida de consola

import * as readline from 'readline';

enum TipoOperacion{
    AGREGAR = "agregar",
    ACTUALIZAR = "actualizar",
    BORRAR = "borrar"
}

interface OperacionInventario{
    (producto: string, cantidad?: number, modoOperacion?: 'sumar' | 'restar' | 'total'): string;
}

let inventario: {[key: string]: number} = {};

const agregarProducto: OperacionInventario = (producto, cantidad = 0) =>{
    producto = producto.toLowerCase();
    inventario[producto] = (inventario[producto] || 0) + cantidad;
    return `Producto ${producto} agregado con cantidad: ${cantidad}`;
}

const actualizarProducto: OperacionInventario = ( producto, cantidad = 0, modoOperacion = 'total') =>{
    producto = producto.toLowerCase();
    if( inventario[producto] !== undefined){
        if(modoOperacion === 'total'){
            inventario[producto] = cantidad;
        }else if(modoOperacion === 'sumar'){
            inventario[producto] += cantidad;
        }else if(modoOperacion === 'restar'){
            inventario[producto] = Math.max(0, inventario[producto] - cantidad);
        }
        return `Cantidad del producto ${producto} actualizada a: ${inventario[producto]}`
    }else{
        return `Producto ${producto} no existe en el inventario.`
    }
}

const borrarProducto: OperacionInventario = (producto) =>{
    producto = producto.toLowerCase();
    if(inventario[producto] !== undefined){
        delete inventario[producto]; //elimina el producto completo
        return `Producto ${producto} eliminado del inventario`
    }else{
        return `Producto ${producto} no existe en el inventario.`;
    }
}

// array 'historial de operaciones' para registrar el historial de todas las operaciones
let historialOperaciones: string[] = [];

function gestionarInventario(tipo: TipoOperacion, producto: string, cantidad?: number, modoOperacion?: 'sumar' | 'restar' | 'total'): string{
    producto = producto.toLowerCase();

    let mensaje: string;

    switch(tipo){
        case TipoOperacion.AGREGAR:
            mensaje = agregarProducto(producto, cantidad!);
            break;
        case TipoOperacion.ACTUALIZAR:
            mensaje = actualizarProducto(producto, cantidad!, modoOperacion!);
            break;
        case TipoOperacion.BORRAR:
            mensaje = borrarProducto(producto)
            break;
        default: 
            mensaje = 'Operación no valida.';
    }
    historialOperaciones.push(mensaje)
    return mensaje;
}

// configuracion del readline para leer y escribir en la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function iniciarInventario(){
    // pregunta al usuario que tipo de operacion desea realizar
    rl.question('Seleccione la operacion (1 = Agregar, 2 = Actualizar, 3 = Borrar): ', (tipo) =>{
        let tipoOperacion: TipoOperacion | undefined;

        switch(tipo){
            case '1':
                tipoOperacion = TipoOperacion.AGREGAR;
                break;
            case '2':
                tipoOperacion = TipoOperacion.ACTUALIZAR;
                break;
            case '3':
                tipoOperacion = TipoOperacion.BORRAR;
                break;
            default:
                console.log("Operacion no valida. Intentelo de nuevo.");
                return iniciarInventario();
        }
        rl.question('Ingrese el nombre del producto: ', (producto) =>{
            if(tipoOperacion === TipoOperacion.BORRAR){
                console.log(gestionarInventario(tipoOperacion, producto));
                // mostrarHistorial()
            }else if(tipoOperacion === TipoOperacion.ACTUALIZAR){
                rl.question('¿Desea sumar, restar o reemplazar el total de la cantidad? (sumar/restar/total):', (modo) =>{
                    const modoOperacion = modo.toLowerCase() as 'sumar' | 'restar' | 'total';
                    rl.question('Ingrese la cantidad: ', (cantidadStr) =>{
                        const cantidad = Number(cantidadStr);
                        console.log(gestionarInventario(tipoOperacion, producto, cantidad, modoOperacion));
                        // mostrarHistorial()
                    })
                }
            )}
        })

    }
)}


