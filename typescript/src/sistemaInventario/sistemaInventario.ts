// Definimos un Enum llmado CategoriaProducto para clasificar los productos

enum CategoriaProducto {
    Electronica = "ELECTRONICA",
    Ropa = "ROPA",
    Alimentos = "ALIMENTOS"
}

// Crear un tipo de producto que va a representar los datos de un producto en el inventario
type Producto = {
    nombre: string,
    precio: number,
    categoria: CategoriaProducto;
}

// Array para almacenar el inventario de productos
let inventario: Producto[] = [];

const agregarProducto = (nombre: string, precio: number, categoria: CategoriaProducto): void => {
    const nuevoProducto: Producto = { nombre, precio, categoria }
    inventario.push(nuevoProducto)
    console.log(`Producto agregado: ${nombre}, Precio: $${precio}, Categoria: ${categoria}`);
}

const listaProductos = (): void => {
    console.log("Inventario de productos: ");
    inventario.forEach(producto => {
        console.log(`- ${producto.nombre} | Precio: $${producto.precio} | Categoria: ${producto.categoria}`);
    })
}

const filtrarPorCategoria = (categoria: CategoriaProducto): void =>{
    console.log(`Producto en la categoria ${categoria}`);
    inventario
    .filter(producto => producto.categoria === categoria)
    .forEach(producto => console.log(`- ${producto.nombre} | Precio: $${producto.precio}`))
}

