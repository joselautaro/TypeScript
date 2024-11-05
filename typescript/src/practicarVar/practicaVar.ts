let n1: string = "Ana"
let e1: number = 25
let esEstudiante: boolean = true
let calificicaciones: number [] = [85, 90, 92, 88]
let estado: string | boolean

function mostrarInformacion(n1: string, e1: number, esEstudiante: boolean): string{
    let estadoEstudiante = esEstudiante ? "Estudiante" : "No es estudiante";
    return `${n1} tiene ${e1} años y es ${estadoEstudiante}`
}

console.log(mostrarInformacion(n1, e1, esEstudiante))