import * as readline from 'readline'

enum Operacion{
    AGREGAR = 1,
    BUSCAR,
    ACTUALIZAR,
    ELIMINAR,
    VER_CONTACTOS
}

interface Contacto{
    nombre: string,
    telefono: string,
    email: string
}

interface OperacionContacto{
    (nombre: string, telefono?: string, email?: string): string
}

let contacto: {[key: string]: Contacto} = {}

let historialOperaciones: string [] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})