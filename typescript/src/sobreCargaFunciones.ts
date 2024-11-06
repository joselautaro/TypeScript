function sumatoria(a: number, b: number): number;
function sumatoria(a: string, b:string): string;

function sumatoria(a: any, b: any): any{
    return a + b;
}

const resultado1 = sumatoria(5, 10);
const resultado2 = sumatoria("Hola", "Typescript")
console.log(resultado1);
console.log(resultado2);

// ____________________________________________________________________

// Firmas de sobre carga
function obtenerLongitud(texto: string): number;
function obtenerLongitud(arr: any[]): number;

// Implementacion de la funcion
function obtenerLongitud(valor: any):number{
    return valor.length;
}

// Usando la funcion
const longitudTexto = obtenerLongitud("TypeScript")
const longitudArray = obtenerLongitud([1, 2, 3, 4, 5, 6])

console.log(longitudTexto);
console.log(longitudArray);

// ________________________________________________________________________________
// Firmas de sobrecarga
function buscarUsuario(id: number): string;
function buscarUsuario(email: string): string;

function buscarUsuario (parametro: any): string {
    if(typeof parametro === "number"){
        return `Usuario con ID: ${parametro}`
    }else if(typeof parametro === "string"){
        return `Usuario con email: ${parametro}`
    }else{
        return "Parametro de busqueda no valido"
    }
}

const usuarioPorID = buscarUsuario(123)
const usuarioPorEmail = buscarUsuario("correo@ejemplo.com")

console.log(usuarioPorID);
console.log(usuarioPorEmail);

// _____________________________________________________________________________

function calcularArea(radio: number): number;
function calcularArea(ancho: number, alto: number): number;

function calcularArea(a: number, b?: number): number{
    if( b === undefined){
        return Math.PI * a * a;
    }else{
        return a * b;
    }
}

const areaCirculo = calcularArea(10);
const areaRectangulo = calcularArea(5, 12)

console.log(areaCirculo);
console.log(areaRectangulo);