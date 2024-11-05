// Que son las arrowFunctions?

/**
 * Las funciones flechas son una forma mas compacta y moderna de escribir funciones en typescript (tambien existentes en javascript). Se introdujeron en ES6, y han sido adoptada por este super conjunto para simplificar la sintaxis, especialmente en funciones cortas y en callbacks
 * 
 * Sintaxis: Se definen usando el operador => (flecha) y tienen una sintaxis mas breve que las funciones tradicionales
 */

// Sintaxis tradicionales
// function sumar (a: number, b: number): number{
//     return a + b;
// }

const sumarFlecha = (a: number, b: number): number =>{
    return a + b
}

// Return implicito
// const sumarFlecha2 = (a: number, b: number): number => a + b



// console.log(sumar(3, 4));
console.log(sumarFlecha(3, 4));

// ___________________________________________________________

// Manejo del contexto this
/**
 * Las funciones flechas no crean su propio contexto this, en cambio heredan el valor del this del contexto en el que se definen. Esto es util en metodos de clase, donde this se refiere consistentemente a la instancia de la clase
 */

class Contador{
    cuenta: number = 0;

    // metodo con funcion flecha que hereda el this
    incrementar = (): void=>{
        this.cuenta++;
        console.log(this.cuenta);
    }
}

const miContador = new Contador();

miContador.incrementar();
miContador.incrementar();

// Parametros opcionales
const saludo2 = (nombre?: string): string => {
    return nombre ? `Hola, ${nombre}!` : "Hola, visitante!"
}
console.log(saludo2("Carlos"));
console.log(saludo2());