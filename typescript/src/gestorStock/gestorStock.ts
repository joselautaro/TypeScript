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