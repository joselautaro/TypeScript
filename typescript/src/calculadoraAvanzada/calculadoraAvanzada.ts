import * as realine from 'readline'

enum TipoOperacion {
    SUMA = "suma",
    RESTA = "resta",
    MULTIPLICACION = "multiplicacion",
    DIVISION = "division"
}

interface OperacionAvanzada{
    (a: number, b: number) : number
}


const suma: OperacionAvanzada = (a, b) => a + b;

const resta: OperacionAvanzada = (a, b) => a - b;

const multiplicacion: OperacionAvanzada = (a, b) => a * b;

const division: OperacionAvanzada = (a, b) => b !== 0 ? a / b: NaN;

let historialOperaciones: string[] = [];

function calcularOperacion(tipo: TipoOperacion, a: number, b: number): number;

function calcularOperacion(tipo: TipoOperacion, valores: number[]): number;

function calcularOperacion(tipo: TipoOperacion, a: number | number[], b?: number): number{
    if( Array.isArray(a) ){
        return a.reduce((acc, val) =>{
            switch(tipo){
                case TipoOperacion.SUMA: return acc + val;
                case TipoOperacion.RESTA: return acc - val;
                case TipoOperacion.MULTIPLICACION: return acc * val;
                case TipoOperacion.DIVISION: return val !== 0 ? acc / val : NaN
                default: return acc;
            }
        })
    }else{
        switch(tipo){
            case TipoOperacion.SUMA: return suma(a, b!);
            case TipoOperacion.RESTA: return resta(a, b!);
            case TipoOperacion.MULTIPLICACION: return multiplicacion(a, b!);
            case TipoOperacion.DIVISION: return division(a, b!)
            default: return NaN;
        }
    }
}

function registrarOperacion(tipo: TipoOperacion, resultado: number){
    historialOperaciones.push(`Operación: ${tipo} - Resultado: ${resultado}`);
}

const rl = realine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarHistorial(){
    console.log("Historial de operaciones");
    console.log(historialOperaciones);

    rl.question('¿Desea realizar otra operación? (si/no): ', (respuesta) =>{
        if( respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si'){
            // iniciarCalculadora()
        }else{
            console.log("Gracias por usar la calculadora");
            rl.close();
        }
    })
}