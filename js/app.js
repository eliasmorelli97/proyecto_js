// class Producto {
//     constructor(id, nombre, cantidad, precio) {
//         this.id = id
//         this.nombre = nombre
//         this.cantidad = cantidad
//         this.precio = precio
//     }
// }

// const producto1 = new Producto(0, 'MOTHERBOARD', 1, 15000)
// const producto2 = new Producto(1, 'PROCESADOR', 1, 45000)
// const producto3 = new Producto(2, 'PLACA DE VIDEO', 1, 60000)
// const producto4 = new Producto(3, 'MEMORIA Ram', 1, 8000)
// const producto5 = new Producto(4, 'FUENTE de poder', 1, 10000)
// const producto6 = new Producto(5, 'HDD', 1, 4000)
// const producto7 = new Producto(6, 'SSD', 1, 6000)
// const producto8 = new Producto(7, 'GABINETE', 1, 12000)

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
//     let opcionProducto = prompt('Indique el número del producto que desea agregar al carrito:\n\n1. MOTHERBOARD\n2. PROCESADOR\n3. PLACA DE VIDEO\n4. MEMORIA Ram\n5. FUENTE de poder\n6. HDD\n7. SSD\n8. GABINETE')

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

const productos = [producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12, producto13, producto14, producto15, producto16, producto17, producto18, producto19, producto20, producto21, producto22, producto23, producto24, producto25, producto26, producto27, producto28, producto29, producto30, producto31, producto32, producto33, producto34, producto35, producto36, producto37, producto38, producto39, producto40, producto41, producto42, producto43, producto44]

const sectionProductos = document.querySelector('.productos')

// MOSTRAR PRODUCTOS

const mostrarProductos = (producto, filtro) => {
    if (filtro) {
        const nuevoArticle = document.createElement('article')
        nuevoArticle.innerHTML = `
        <span class="descripcion">${producto.descripcion}</span>
        <img src="${producto.imagen}" alt="${producto.descripcion}">
        <span>$${producto.precio}</span>
        <input class='button' type="button" value="Agregar al carrito">
        `
        nuevoArticle.classList.add('producto')
        sectionProductos.append(nuevoArticle)
    }
}

// LIMPIAR PRODUCTOS MOSTRADOS

const limpiarProductos = () => {
    sectionProductos.innerHTML = ''
}

// LIMPIAR BUSQUEDA

const limpiarBusqueda = () => {
    document.querySelector('#txtBusqueda').value = ''
}

// MODIFICAR FILTRO DE BUSQUEDA

const modificarFiltroBusqueda = (mensaje) => {
    document.querySelector('#filtro').textContent = mensaje
}

// MOSTRAR PRODUCTOS DESTACADOS

productos.forEach((producto) => {
        mostrarProductos(producto, producto.destacado)
})

modificarFiltroBusqueda('Productos Destacados')

// MOSTRAR PRODUCTOS POR BUSQUEDA

const buscarProductos = () => {
    let txtBusqueda = document.querySelector('#txtBusqueda').value
    let arrayBusqueda = txtBusqueda.split(' ')
    console.log(arrayBusqueda)
    console.log(arrayBusqueda.length)

    if (txtBusqueda != '') {
        limpiarProductos()
        productos.forEach((producto) => {
            let contienePalabra = 0
            for (i = 0; i < arrayBusqueda.length; i++) {
                if (producto.descripcion.includes(arrayBusqueda[i].toUpperCase())) {
                    contienePalabra++
                }
            }
            if (contienePalabra == arrayBusqueda.length) {
                mostrarProductos(producto, true)
            }
        })

        limpiarBusqueda()
        modificarFiltroBusqueda(`Resultado de búsqueda: "${txtBusqueda}"`)
    }
}

// BUSQUEDA CON TECLA ENTER

let inputBusqueda = document.querySelector('#txtBusqueda')

inputBusqueda.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        e.preventDefault();
        buscarProductos()
    }
})

// BUSQUEDA CON BOTON BUSCAR

let btnBusqueda = document.querySelector('#btnBusqueda')

btnBusqueda.addEventListener('click', (e) => {
    e.preventDefault
    buscarProductos()
})

// MOSTRAR PRODUCTOS POR CATEGORIA

let categorias = document.querySelectorAll('.categoria')

categorias.forEach((categoria) => {
    categoria.addEventListener('click', (e) => {
        e.preventDefault
        let categoriaProducto = e.target.getAttribute('data-id').toUpperCase()
        limpiarProductos()
        productos.forEach((producto) => {
            if (producto.categoria == categoriaProducto) {
                mostrarProductos(producto, true)
            }
        })
        limpiarBusqueda()
        let categoriaMensaje = categoriaProducto.substring(0, 1) + categoriaProducto.substring(1, ).toLowerCase()
        modificarFiltroBusqueda(categoriaMensaje)
    })
});