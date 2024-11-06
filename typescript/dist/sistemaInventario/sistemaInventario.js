"use strict";
var CategoriaProducto;
(function (CategoriaProducto) {
    CategoriaProducto["Electronica"] = "ELECTRONICA";
    CategoriaProducto["Ropa"] = "ROPA";
    CategoriaProducto["Alimentos"] = "ALIMENTOS";
})(CategoriaProducto || (CategoriaProducto = {}));
let inventario = [];
const agregarProducto = (nombre, precio, categoria) => {
    const nuevoProducto = { nombre, precio, categoria };
    inventario.push(nuevoProducto);
    console.log(`Producto agregado: ${nombre}, Precio: $${precio}, Categoria: ${categoria}`);
};
const listarProductos = () => {
    console.log("Inventario de productos: ");
    inventario.forEach(producto => {
        console.log(`- ${producto.nombre} | Precio: $${producto.precio} | Categoria: ${producto.categoria}`);
    });
};
const filtrarPorCategoria = (categoria) => {
    console.log(`Producto en la categoria ${categoria}`);
    inventario
        .filter(producto => producto.categoria === categoria)
        .forEach(producto => console.log(`- ${producto.nombre} | Precio: $${producto.precio}`));
};
const eliminarProducto = (nombre) => {
    inventario = inventario.filter(producto => producto.nombre !== nombre);
    console.log(`Producto ${nombre} eliminado del inventario`);
};
agregarProducto("Smartphone", 500, CategoriaProducto.Electronica);
agregarProducto("Camiseta", 200, CategoriaProducto.Ropa);
agregarProducto("Pan", 30, CategoriaProducto.Alimentos);
listarProductos();
filtrarPorCategoria(CategoriaProducto.Ropa);
eliminarProducto("Smartphone");
listarProductos();
//# sourceMappingURL=sistemaInventario.js.map