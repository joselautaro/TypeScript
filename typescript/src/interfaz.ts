interface Operacion{
    (a: number, b: number): number;
}

const sum: Operacion = (a, b) => a + b;

const multip: Operacion =(a, b) => a * b;

console.log(sum(5, 3));
console.log(multip(5, 3));

// _______________________________________________

function resta1(a: number, b: number){
    return a - b;
}

const operaciones: Operacion[] = [sum, multip, resta1];

operaciones.forEach((operacion) => console.log(operacion(10, 5)));


// _______________________________________________

// Tipazo avanzado con parametros opciones y predeterminados

interface Calculadora {
    (a: number, b: number, c?: number): number;
}

const calcular: Calculadora = (a, b, c = 0) => a + b + c;

console.log(calcular(4, 5));
console.log(calcular(4, 5, 6));