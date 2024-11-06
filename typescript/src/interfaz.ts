interface Operacion{
    (a: number, b: number): number;
}

const sum: Operacion = (a, b) => a + b;

const multip: Operacion =(a, b) => a * b;

console.log(sum(5, 3));
console.log(multip(5, 3));

