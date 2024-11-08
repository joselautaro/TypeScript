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
    TipoOperacion["SUMA"] = "suma";
    TipoOperacion["RESTA"] = "resta";
    TipoOperacion["MULTIPLICACION"] = "multiplicacion";
    TipoOperacion["DIVISION"] = "division";
})(TipoOperacion || (TipoOperacion = {}));
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => b !== 0 ? a / b : NaN;
let historialOperaciones = [];
function calcularOperacion(tipo, a, b) {
    if (Array.isArray(a)) {
        return a.reduce((acc, val) => {
            switch (tipo) {
                case TipoOperacion.SUMA: return acc + val;
                case TipoOperacion.RESTA: return acc - val;
                case TipoOperacion.MULTIPLICACION: return acc * val;
                case TipoOperacion.DIVISION: return val !== 0 ? acc / val : NaN;
                default: return acc;
            }
        });
    }
    else {
        switch (tipo) {
            case TipoOperacion.SUMA: return suma(a, b);
            case TipoOperacion.RESTA: return resta(a, b);
            case TipoOperacion.MULTIPLICACION: return multiplicacion(a, b);
            case TipoOperacion.DIVISION: return division(a, b);
            default: return NaN;
        }
    }
}
function registrarOperacion(tipo, resultado) {
    historialOperaciones.push(`Operación: ${tipo} - Resultado: ${resultado}`);
}
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function mostrarHistorial() {
    console.log("Historial de operaciones");
    console.log(historialOperaciones);
    rl.question('¿Desea realizar otra operación? (si/no): ', (respuesta) => {
        if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
            iniciarCalculadora();
        }
        else {
            console.log("Gracias por usar la calculadora");
            rl.close();
        }
    });
}
function iniciarCalculadora() {
    rl.question('Ingrese el tipo de operación (suma, resta, multiplicacion, division):', (tipo) => {
        const tipoOperacion = TipoOperacion[tipo.toUpperCase()];
        if (!tipoOperacion) {
            console.log("Operación no valida. Intentelo de nuevo");
            return iniciarCalculadora();
        }
        rl.question('¿Desea ingresar un array de numeros? (si/no): ', (respuesta) => {
            if (respuesta.toLowerCase() === 'sí' || respuesta.toLowerCase() === 'si') {
                rl.question('Ingrese los numeros separados por comas (,): ', (entrada) => {
                    const valores = entrada.split(',').map(Number);
                    const resultado = calcularOperacion(tipoOperacion, valores);
                    registrarOperacion(tipoOperacion, resultado);
                    console.log(`Resultado: ${resultado}`);
                    mostrarHistorial();
                });
            }
            else {
                rl.question('Ingrese el primer numero: ', (num1) => {
                    rl.question('Ingrese el segundo numero: ', (num2) => {
                        const a = parseFloat(num1);
                        const b = parseFloat(num2);
                        const resultado = calcularOperacion(tipoOperacion, a, b);
                        registrarOperacion(tipoOperacion, resultado);
                        console.log(`Resltado: ${resultado}`);
                        mostrarHistorial();
                    });
                });
            }
        });
    });
}
iniciarCalculadora();
//# sourceMappingURL=calculadoraAvanzada.js.map