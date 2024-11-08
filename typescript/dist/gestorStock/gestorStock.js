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
var TipoOperacion;
(function (TipoOperacion) {
    TipoOperacion["AGREGAR"] = "agregar";
    TipoOperacion["ACTUALIZAR"] = "actualizar";
    TipoOperacion["BORRAR"] = "borrar";
})(TipoOperacion || (TipoOperacion = {}));
let inventario = {};
const agregarProducto = (producto, cantidad = 0) => {
    producto = producto.toLowerCase();
    inventario[producto] = (inventario[producto] || 0) + cantidad;
    return `Producto ${producto} agregado con cantidad: ${cantidad}`;
};
const actualizarProducto = (producto, cantidad = 0, modoOperacion = 'total') => {
    producto = producto.toLowerCase();
    if (inventario[producto] !== undefined) {
        if (modoOperacion === 'total') {
            inventario[producto] = cantidad;
        }
        else if (modoOperacion === 'sumar') {
            inventario[producto] += cantidad;
        }
        else if (modoOperacion === 'restar') {
            inventario[producto] = Math.max(0, inventario[producto] - cantidad);
        }
        return `Cantidad del producto ${producto} actualizada a: ${inventario[producto]}`;
    }
    else {
        return `Producto ${producto} no existe en el inventario.`;
    }
};
const borrarProducto = (producto) => {
    producto = producto.toLowerCase();
    if (inventario[producto] !== undefined) {
        delete inventario[producto];
        return `Producto ${producto} eliminado del inventario`;
    }
    else {
        return `Producto ${producto} no existe en el inventario.`;
    }
};
let historialOperaciones = [];
function gestionarInventario(tipo, producto, cantidad, modoOperacion) {
    producto = producto.toLowerCase();
    let mensaje;
    switch (tipo) {
        case TipoOperacion.AGREGAR:
            mensaje = agregarProducto(producto, cantidad);
            break;
        case TipoOperacion.ACTUALIZAR:
            mensaje = actualizarProducto(producto, cantidad, modoOperacion);
            break;
        case TipoOperacion.BORRAR:
            mensaje = borrarProducto(producto);
            break;
        default:
            mensaje = 'Operación no valida.';
    }
    historialOperaciones.push(mensaje);
    return mensaje;
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function iniciarInventario() {
    rl.question('Seleccione la operaciòn (1 = Agregar, 2 = Actualizar, 3 = Borrar: ', (tipo) => {
        let tipoOperacion;
        switch (tipo) {
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
                console.log("Operacion no valida. Intèntelo de nuevo");
                return iniciarInventario();
        }
        rl.question('Ingrese el nombre del producto: ', (producto) => {
            if (tipoOperacion === TipoOperacion.BORRAR) {
                console.log(gestionarInventario(tipoOperacion, producto));
                mostrarHistorial();
            }
            else if (tipoOperacion === TipoOperacion.ACTUALIZAR) {
                rl.question('¿Deseas sumar, restar o reemplazar el total de la cantidad? Digite alguna de las siguientes opciones (sumar/restar/total):', (modo) => {
                    const modoOperacion = modo.toLowerCase();
                    rl.question('Ingrese la cantidad: ', (cantidadStr) => {
                        const cantidad = Number(cantidadStr);
                        console.log(gestionarInventario(tipoOperacion, producto, cantidad, modoOperacion));
                        mostrarHistorial();
                    });
                });
            }
            else {
                rl.question('Ingrese la cantidad a agregar: ', (cantidadStr) => {
                    const cantidad = Number(cantidadStr);
                    console.log(gestionarInventario(tipoOperacion, producto, cantidad));
                    mostrarHistorial();
                });
            }
        });
    });
}
function mostrarHistorial() {
    console.log("\nHistorial de operaciones");
    historialOperaciones.forEach((op) => console.log(op));
    rl.question('\n¿Desea realizar otra operacion? (si/no):', (respuesta) => {
        if (respuesta.toLowerCase() === 'si' || respuesta.toLowerCase() === 'si') {
            iniciarInventario();
        }
        else {
            console.log("Gracias por usar el gestor de inventario.");
            rl.close();
        }
    });
}
iniciarInventario();
//# sourceMappingURL=gestorStock.js.map