// class Producto {
//     constructor(id, nombre, cantidad, precio) {
//         this.id = id
//         this.nombre = nombre
//         this.cantidad = cantidad
//         this.precio = precio
//     }
// }

// const producto1 = new Producto(0, 'Motherboard', 1, 15000)
// const producto2 = new Producto(1, 'Procesador', 1, 45000)
// const producto3 = new Producto(2, 'Placa de video', 1, 60000)
// const producto4 = new Producto(3, 'Memoria Ram', 1, 8000)
// const producto5 = new Producto(4, 'Fuente de poder', 1, 10000)
// const producto6 = new Producto(5, 'HDD', 1, 4000)
// const producto7 = new Producto(6, 'SSD', 1, 6000)
// const producto8 = new Producto(7, 'Gabinete', 1, 12000)

// let carrito = []
// let seleccionarProducto = true

// const agregarProducto = (producto) => {
//     if (carrito.some((el) => el.id == producto.id)) {
//         const index = carrito.map(object => object.id).indexOf(producto.id);
//         carrito[index].cantidad++
//     }

//     else {
//         carrito.push(producto)
//     }

//     let repetir = true

//     while (repetir) {
//         let opcion = prompt('¿Desea agregar otro producto al carrito?\n\n1. Si\n2. No')

//         if (opcion == '1') {
//             repetir = false
//         }

//         else if (opcion == '2') {
//             seleccionarProducto = false
//             repetir = false
//         }

//         else {
//             alert('Opción inválida, vuelva a intentarlo')
//         }
//     }
// }

// const detalleCarrito = () => {
//     let detalleCarrito = 'Detalle de tu carrito:\n\n'

//     for (const producto of carrito) {
//         detalleCarrito += 'Producto: ' + producto.nombre + ', Cantidad: ' + producto.cantidad + ', Precio: $' + producto.precio + ', Total: $' + (producto.cantidad * producto.precio) + '\n\n'
//     }

//     return detalleCarrito
// }

// const totalCarrito = () => {
//     let sumaTotal = 0

//     for (const producto of carrito) {
//         sumaTotal += producto.cantidad * producto.precio
//     }

//     return sumaTotal
// }

// while (seleccionarProducto) {
//     let opcionProducto = prompt('Indique el número del producto que desea agregar al carrito:\n\n1. Motherboard\n2. Procesador\n3. Placa de video\n4. Memoria Ram\n5. Fuente de poder\n6. HDD\n7. SSD\n8. Gabinete')

//     switch (opcionProducto) {
//         case '1':
//             agregarProducto(producto1)
//             break;

//         case '2':
//             agregarProducto(producto2)
//             break;

//         case '3':
//             agregarProducto(producto3)
//             break;

//         case '4':
//             agregarProducto(producto4)
//             break;

//         case '5':
//             agregarProducto(producto5)
//             break;

//         case '6':
//             agregarProducto(producto6)
//             break;

//         case '7':
//             agregarProducto(producto7)
//             break;

//         case '8':
//             agregarProducto(producto8)
//             break;
    
//         default:
//             alert('Opción inválida, vuelva a intentarlo')
//             break;
//     }
// }

// alert(detalleCarrito() + 'Total de tu carrito: $' + totalCarrito())

////////////////////////////////////////////////////////////////////////////////////////////////////////

// Creando los productos en el HTML mediante el uso de DOM

class Articulo {
    constructor(descripcion, categoria, destacado, imagen, precio) {
        this.descripcion = descripcion
        this.categoria = categoria
        this.destacado = destacado
        this.imagen = imagen
        this.precio = precio
    }
}

const articulo1 = new Articulo('Ryzen 5 5600G', 'Procesadores', true, './media/ryzen_5_5600g.jpg', 38449)
const articulo2 = new Articulo('Ryzen 7 5700G', 'Procesadores', true,'./media/ryzen_7_5700g.jpg', 54999)
const articulo3 = new Articulo('Intel Core i3 12100F', 'Procesadores', true,'./media/intel_i3_12100f.jpeg', 20200)
const articulo4 = new Articulo('Intel Core i5 12400F', 'Procesadores', true,'./media/intel_i5_12400f.jpg', 42990)
const articulo5 = new Articulo('Mother ASUS A520', 'Motherboards', true,'./media/mother_asus_a520.jpg', 12830)
const articulo6 = new Articulo('Mother Gigabyte H610', 'Motherboards', true,'./media/mother_gigabyte_h610.jpg', 20782)
const articulo7 = new Articulo('Placa de video GTX 1650', 'Placas de video', true,'./media/placa_de_video_gtx1650.jpg', 52272)
const articulo8 = new Articulo('Placa de video RX 6500XT', 'Placas de video', true,'./media/placa_de_video_rx6500.jpg', 59850)
const articulo9 = new Articulo('Memoria RAM HyperX 8gb 3200MHZ', 'Memorias RAM', true,'./media/ram_hyperx_8gb.jpg', 7300)

const articulos = [articulo1, articulo2, articulo3, articulo4, articulo5, articulo6, articulo7, articulo8, articulo9]
const sectionProductos = document.querySelector('#articulos')

articulos.forEach((articulo) => {
    const nuevoArticle = document.createElement('article')
    nuevoArticle.innerHTML = `
        <p>${articulo.descripcion}</p>
        <img src="${articulo.imagen}" alt="${articulo.descripcion}">
        <p>$${articulo.precio}</p>
        <input class='button' type="button" value="Agregar al carrito">
    `
    nuevoArticle.className = 'producto'
    sectionProductos.append(nuevoArticle)
})

let usuario = prompt('Ingrese su nombre')

const bienvenida = document.querySelector('#bienvenida')
bienvenida.innerHTML = '¡Hola ' + usuario + '!'