class Producto {
    constructor(id, nombre, cantidad, precio) {
        this.id = id
        this.nombre = nombre
        this.cantidad = cantidad
        this.precio = precio
    }
}

const producto1 = new Producto(0, 'Motherboard', 1, 15000)
const producto2 = new Producto(1, 'Procesador', 1, 45000)
const producto3 = new Producto(2, 'Placa de video', 1, 60000)
const producto4 = new Producto(3, 'Memoria Ram', 1, 8000)
const producto5 = new Producto(4, 'Fuente de poder', 1, 10000)
const producto6 = new Producto(5, 'HDD', 1, 4000)
const producto7 = new Producto(6, 'SSD', 1, 6000)
const producto8 = new Producto(7, 'Gabinete', 1, 12000)

let carrito = []
let seleccionarProducto = true

const agregarProducto = (producto) => {
    if (carrito.some((el) => el.id == producto.id)) {
        const index = carrito.map(object => object.id).indexOf(producto.id);
        carrito[index].cantidad++
    }

    else {
        carrito.push(producto)
    }

    let repetir = true

    while (repetir) {
        let opcion = prompt('¿Desea agregar otro producto al carrito?\n\n1. Si\n2. No')

        if (opcion == '1') {
            repetir = false
        }

        else if (opcion == '2') {
            seleccionarProducto = false
            repetir = false
        }

        else {
            alert('Opción inválida, vuelva a intentarlo')
        }
    }
}

const detalleCarrito = () => {
    let detalleCarrito = 'Detalle de tu carrito:\n\n'

    for (const producto of carrito) {
        detalleCarrito += 'Producto: ' + producto.nombre + ', Cantidad: ' + producto.cantidad + ', Precio: $' + producto.precio + ', Total: $' + (producto.cantidad * producto.precio) + '\n\n'
    }

    return detalleCarrito
}

const totalCarrito = () => {
    let sumaTotal = 0

    for (const producto of carrito) {
        sumaTotal += producto.cantidad * producto.precio
    }

    return sumaTotal
}

while (seleccionarProducto) {
    let opcionProducto = prompt('Indique el número del producto que desea agregar al carrito:\n\n1. Motherboard\n2. Procesador\n3. Placa de video\n4. Memoria Ram\n5. Fuente de poder\n6. HDD\n7. SSD\n8. Gabinete')

    switch (opcionProducto) {
        case '1':
            agregarProducto(producto1)
            break;

        case '2':
            agregarProducto(producto2)
            break;

        case '3':
            agregarProducto(producto3)
            break;

        case '4':
            agregarProducto(producto4)
            break;

        case '5':
            agregarProducto(producto5)
            break;

        case '6':
            agregarProducto(producto6)
            break;

        case '7':
            agregarProducto(producto7)
            break;

        case '8':
            agregarProducto(producto8)
            break;
    
        default:
            alert('Opción inválida, vuelva a intentarlo')
            break;
    }
}

alert(detalleCarrito() + 'Total de tu carrito: $' + totalCarrito())