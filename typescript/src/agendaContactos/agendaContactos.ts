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

let contactos: {
    [key: string]: Contacto
} = {}

let historialOperaciones: string [] = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//agregar contacto

const agregarContacto: OperacionContacto = (nombre, telefono, email) =>{
    nombre = nombre.toLowerCase();
    if( contactos[nombre] ){
        return `El contacto "${nombre}" ya existe.`;
    }else{
        contactos[nombre] = {nombre, telefono: telefono || '', email: email || ''};
        return `Contacto "${nombre}" agregado exitosamente`
    }
}

const buscarContacto: OperacionContacto = (nombre) => {
    // Convertimos el nombre a minusculas
    nombre = nombre.toLowerCase();

    // Verificamos si el contacto existe
    if(contactos[nombre]){
        const contacto = contactos[nombre]
        return `Contacto encontrado: Nombre: ${contacto.nombre}, Telèfono: ${contacto.nombre}, Email: ${contacto.email}`;
    }else{
        return `El contacto "${nombre}" no existe.`;
    }
}

const actualizarContacto: OperacionContacto = (nombre, telefono, email) =>{
    nombre = nombre.toLowerCase();

    if(contactos[nombre]){
        //actualizamos el tefono si se proporciona
        if(telefono) contactos[nombre].telefono = telefono;
        // actualizamos el email si se proporciona
        if(email) contactos[nombre].email = email;
        return `Contacto "${nombre}" actualizamos correctamente`;
    }else{
        return `El contacto "${nombre}" no existe`;
    }
};

const eliminarContacto: OperacionContacto = (nombre) =>{
    nombre = nombre.toLowerCase()

    if(contactos[nombre]){
        delete contactos[nombre];
        return `Contacto "${nombre}" eliminado.`;
    }else{
        return `El contacto "${nombre} no existe`;
    }
}

function verContactos(): string{
    let resultado = "Lista de contactos:\n";

    // recorremos todos los contactos y los añadimos a la cadena resultado
    for(let key in contactos){
        const contacto = contactos[key];
        resultado += `Nombre: ${contacto.nombre}, Teléfono: ${contacto.telefono}, Email: ${contacto.email}\n`;
    }
    return resultado;
}

function gestionarContactos (operacion: Operacion, nombre: string, telefono?: string, email?: string): string{
    let mensaje: string;

    switch(operacion){
        case Operacion.AGREGAR:
            mensaje = agregarContacto(nombre, telefono, email);
            break;
        case Operacion.BUSCAR:
            mensaje = buscarContacto(nombre)
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
    historialOperaciones.push(mensaje)
    return mensaje;
}

function mostrarHistorial(){
    console.log("\nHistorial de operaciones:");
    historialOperaciones.forEach(op => console.log(op));

    rl.question('\n¿Desea realizar otra operación? (si/no): ', (respuesta) =>{
        if(respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si'){
            iniciarGestorContactos();
        }else{
            console.log("Gracias por usar el gestor de contactos.");
            rl.close();
        }
    })
}

function iniciarGestorContactos(){
    // pregunta al usuario que operacion desea realizar
    rl.question('Seleccione la operacion (1 = Agregar, 2 = Buscar, 3 = Actualizar, 4 = Eliminar, 5 = Ver todos): ', (tipo) =>{
        const operacion = parseInt(tipo) as Operacion;

        // Verificamos si la operacion es ver contactos, que no necesita mas datos
        if(operacion === Operacion.VER_CONTACTOS){
            console.log(gestionarContactos(operacion, ""));
            mostrarHistorial()
            return;
        }
         rl.question('Ingrese el nombre del contacto: ', (nombre) =>{
            if(operacion === Operacion.AGREGAR || operacion === Operacion.ACTUALIZAR){
                rl.question('Ingrese el telefono del contacto: ', (telefono) =>{
                    rl.question('Ingrese el email del contacto: ', (email) =>{
                        console.log(gestionarContactos(operacion, nombre, telefono, email));
                        mostrarHistorial();
                    })
                })
            }else{
                console.log(gestionarContactos(operacion, nombre));
                mostrarHistorial();
            }
         })
    })
}

iniciarGestorContactos()
