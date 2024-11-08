import * as readline from 'readline'

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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function mostrarHistorial(){
    console.log("Historial de operaciones");
    console.log(historialOperaciones);

    rl.question('¿Desea realizar otra operación? (si/no): ', (respuesta) =>{
        if( respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si'){
            iniciarCalculadora()
        }else{
            console.log("Gracias por usar la calculadora");
            rl.close();
        }
    })
}

function iniciarCalculadora(){

    rl.question('Ingrese el tipo de operación (suma, resta, multiplicacion, division):', (tipo) =>{
        const tipoOperacion = TipoOperacion[tipo.toUpperCase() as keyof typeof TipoOperacion];

        if( !tipoOperacion ){
            console.log("Operación no valida. Intentelo de nuevo");
            return iniciarCalculadora()
        }

        rl.question('¿Desea ingresar un array de numeros? (si/no): ', (respuesta) =>{
            if(respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si'){
                rl.question('Ingrese los numeros separados por comas (,): ', (entrada) =>{
                    const valores = entrada.split(',').map(Number);
                    const resultado = calcularOperacion(tipoOperacion, valores)
                    registrarOperacion(tipoOperacion, resultado);
                    console.log(`Resultado: ${resultado}`);
                    mostrarHistorial();
                })
            }else{
                rl.question('Ingrese el primer numero: ', (num1)  =>{
                    rl.question('Ingrese el segundo numero: ', (num2) =>{
                        const a = parseFloat(num1);
                        const b = parseFloat(num2);
                        const resultado = calcularOperacion(tipoOperacion, a, b);
                        registrarOperacion(tipoOperacion, resultado);
                        console.log(`Resltado: ${resultado}`);
                        mostrarHistorial()
                    })
                })
            }
        })
    })

}

iniciarCalculadora()
