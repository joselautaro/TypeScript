// function suma (a: number, b: number): number{
//     return a+ b
// }
// Nos daria error
// console.log(suma(5, "3"));
// Manera correcta
// console.log(suma(5, 3));

// ___________________________________________________

// type Operacion = (x: number, y: number) => number

// ___________________________________________________

// const multiplicar: Operacion = (x, y) => x*y;

// ___________________________________________________

// Uso practico de tipos de funcion
// type Filtro = (n: number) => boolean;

// function filtrarLista(lista: number[], criterio: Filtro): number[]{
//     return lista.filter(criterio)
// }

// const numeros = [1, 2, 3, 4, 5, 6]

// const esPar: Filtro = (n) => n % 2 === 0;

// console.log(filtrarLista(numeros, esPar));

// _____________________________________________________

// type Operacion = (x: number, y: number) => number

// const aplicarOperacion = ( x: number, y: number, Operacion: (a: number, b: number) => number): number =>{
//     return Operacion(x, y)
// }

// const resultado = aplicarOperacion(6, 3, (a, b) => a - b);
// console.log(resultado);




