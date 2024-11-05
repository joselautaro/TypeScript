// Sintaxis basica
// let nombreVariable: TIPO = valorInicial

// Tipo string
let n: string = "Goku"

// Tipo number
let e: number = 32

// Tipo boolean
let esActivo: boolean = true

// _________________________________________________

// Arrays
let ns: number[] = [1, 2, 3, 4, 5]

// numerico
let anims: string[] = ['oso', 'panda', 'sapo']

// boolean
let check: boolean[] = []

// nomenclatura Array<tipo>
let numes: Array<number> = []

// ________________________________________________

// Tipo any -> NO RECOMENDADO

let variableDinamica: any = "puede ser cualquier cosa"

variableDinamica = 42

// 1 tipo any permite que una variable pueda contener cualquier tipo de valor, sin restricciones. Sin embargo se recomienda evitar su uso, YA QUE ANULA EL BENEFICIO DEL TIPADO ESTÁTICO

// ____________________________________________________

// Tipo union

let identificador: number | string

identificador = 101

identificador = "ABC123"