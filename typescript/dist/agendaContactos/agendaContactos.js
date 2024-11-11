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
var Operacion;
(function (Operacion) {
    Operacion[Operacion["AGREGAR"] = 1] = "AGREGAR";
    Operacion[Operacion["BUSCAR"] = 2] = "BUSCAR";
    Operacion[Operacion["ACTUALIZAR"] = 3] = "ACTUALIZAR";
    Operacion[Operacion["ELIMINAR"] = 4] = "ELIMINAR";
    Operacion[Operacion["VER_CONTACTOS"] = 5] = "VER_CONTACTOS";
})(Operacion || (Operacion = {}));
let contactos = {};
let historialOperaciones = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const agregarContacto = (nombre, telefono, email) => {
    nombre = nombre.toLowerCase();
    if (contactos[nombre]) {
        return `El contacto "${nombre}" ya existe.`;
    }
    else {
        contactos[nombre] = { nombre, telefono: telefono || '', email: email || '' };
        return `Contacto "${nombre}" agregado exitosamente`;
    }
};
const buscarContacto = (nombre) => {
    nombre = nombre.toLowerCase();
    if (contactos[nombre]) {
        const contacto = contactos[nombre];
        return `Contacto encontrado: Nombre: ${contacto.nombre}, Telèfono: ${contacto.nombre}, Email: ${contacto.email}`;
    }
    else {
        return `El contacto "${nombre}" no existe.`;
    }
};
const actualizarContacto = (nombre, telefono, email) => {
    nombre = nombre.toLowerCase();
    if (contactos[nombre]) {
        if (telefono)
            contactos[nombre].telefono = telefono;
        if (email)
            contactos[nombre].email = email;
        return `Contacto "${nombre}" actualizamos correctamente`;
    }
    else {
        return `El contacto "${nombre}" no existe`;
    }
};
const eliminarContacto = (nombre) => {
    nombre = nombre.toLowerCase();
    if (contactos[nombre]) {
        delete contactos[nombre];
        return `Contacto "${nombre}" eliminado.`;
    }
    else {
        return `El contacto "${nombre} no existe`;
    }
};
function verContactos() {
    let resultado = "Lista de contactos:\n";
    for (let key in contactos) {
        const contacto = contactos[key];
        resultado += `Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}\n`;
    }
    return resultado;
}
function gestionarContactos(operacion, nombre, telefono, email) {
    let mensaje;
    switch (operacion) {
        case Operacion.AGREGAR:
            mensaje = agregarContacto(nombre, telefono, email);
            break;
        case Operacion.BUSCAR:
            mensaje = buscarContacto(nombre);
            break;
        case Operacion.ACTUALIZAR:
            mensaje = actualizarContacto(nombre, telefono, email);
            break;
        case Operacion.ELIMINAR:
            mensaje = eliminarContacto(nombre);
            break;
        case Operacion.VER_CONTACTOS:
            mensaje = verContactos();
            break;
        default:
            mensaje = "Operación no valida";
    }
    historialOperaciones.push(mensaje);
    return mensaje;
}
function mostrarHistorial() {
    console.log("\nHistorial de operaciones:");
    historialOperaciones.forEach(op => console.log(op));
    rl.question('\n¿Desea realizar otra operación? (si/no): ', (respuesta) => {
        if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
            iniciarGestorContactos();
        }
        else {
            console.log("Gracias por usar el gestor de contactos.");
            rl.close();
        }
    });
}
function iniciarGestorContactos() {
    rl.question('Seleccione la operacion (1 = Agregar, 2 = Buscar, 3 = Actualizar, 4 = Eliminar, 5 = Ver todos): ', (tipo) => {
        const operacion = parseInt(tipo);
        if (operacion === Operacion.VER_CONTACTOS) {
            console.log(gestionarContactos(operacion, ""));
            mostrarHistorial();
            return;
        }
        rl.question('Ingrese el nombre del contacto: ', (nombre) => {
            if (operacion === Operacion.AGREGAR || operacion === Operacion.ACTUALIZAR) {
                rl.question('Ingrese el telefono del contacto: ', (telefono) => {
                    rl.question('Ingrese el email del contacto: ', (email) => {
                        console.log(gestionarContactos(operacion, nombre, telefono, email));
                        mostrarHistorial();
                    });
                });
            }
            else {
                console.log(gestionarContactos(operacion, nombre));
                mostrarHistorial();
            }
        });
    });
}
iniciarGestorContactos();
//# sourceMappingURL=agendaContactos.js.map