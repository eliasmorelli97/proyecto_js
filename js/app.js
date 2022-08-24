// CARGAR PRODUCTOS DEL CARRITO

let carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [] // OPERADOR TERNARIO

// MOSTRAR PRODUCTOS

const sectionProductos = document.querySelector('.productos')

const mostrarProductos = ({id, descripcion, imagen, precio}, filtro) => { // DESESTRUCTURACIÓN DE OBJETO POR PARÁMETROS
    if (filtro) {
        const nuevoArticle = document.createElement('article')
        nuevoArticle.innerHTML = `
            <span class="descripcion">${descripcion}</span>
            <img src="${imagen}" alt="${descripcion}">
            <span>$${precio}</span>
            <input class="btnAgregarAlCarrito" type="button" value="Agregar al carrito" data-id="${id}">
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

// AGREGAR PRODUCTO AL CARRITO

const logoCarrito = document.querySelector('.logoCarrito')

const botonesAgregarAlCarrito = () => {
    const agregarProductoAlCarrito = document.querySelectorAll('.btnAgregarAlCarrito')
    agregarProductoAlCarrito.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault
            const productoIdSeleccionado = e.target.getAttribute('data-id')
            const productoSeleccionado = productos.find((producto) => producto.id == productoIdSeleccionado)

            // Si el producto ya está en el carrito, le agrega uno a la cantidad
            if (carrito.some((producto) => producto.id == productoIdSeleccionado)) {
                const index = carrito.indexOf(carrito.find((producto) => producto.id == productoIdSeleccionado));
                carrito[index].cantidad++
            } else {
                carrito.push(productoSeleccionado)
            }
            localStorage.setItem('carrito', JSON.stringify(carrito))
            mostrarNumProductosCarrito()

            Swal.fire({
                html: `
                    <div class="toast">
                        <strong>Producto agregado al carrito</strong>
                        <hr>
                        <div class="toastDetalle">
                            <img src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.descripcion}">
                            <span class="descripcion">${productoSeleccionado.descripcion}</span>
                        </div>
                    </div>
                `,
                showConfirmButton: false,
                padding: '0.8rem',
                color: 'white',
                background: '#A22E9E',
                toast: true,
                position: 'bottom-end',
                timer: 3000
            })
        })
    })
}

botonesAgregarAlCarrito()

// MOSTRAR JUNTO AL LOGO DEL CARRITO EL NÚMERO DE PRODUCTOS QUE HAY AGREGADOS

const mostrarNumProductosCarrito = () => {
    let cantidadProductosCarrito = 0
    carrito.forEach((producto) => {
        cantidadProductosCarrito += producto.cantidad
    })
    const numProductosCarrito = document.querySelector('.numProductosCarrito')
    numProductosCarrito.innerHTML = cantidadProductosCarrito
}

mostrarNumProductosCarrito()

// MOSTRAR PRODUCTOS POR BUSQUEDA

const buscarProductos = () => {
    const txtBusqueda = document.querySelector('#txtBusqueda').value
    const arrayBusqueda = txtBusqueda.split(' ')
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

const inputBusqueda = document.querySelector('#txtBusqueda')

inputBusqueda.addEventListener('keyup', (e) => {
    if (e.code === 'Enter') {
        e.preventDefault();
        buscarProductos()
        botonesAgregarAlCarrito()
    }
})

// BUSQUEDA CON BOTON BUSCAR

const btnBusqueda = document.querySelector('#btnBusqueda')

btnBusqueda.addEventListener('click', (e) => {
    e.preventDefault
    buscarProductos()
    botonesAgregarAlCarrito()
})

// MOSTRAR PRODUCTOS POR CATEGORIA

const categorias = document.querySelectorAll('.categoria')

categorias.forEach((categoria) => {
    categoria.addEventListener('click', (e) => {
        e.preventDefault
        const categoriaProducto = e.target.getAttribute('data-id').toUpperCase()
        limpiarProductos()
        productos.forEach((producto) => {
            producto.categoria == categoriaProducto && mostrarProductos(producto, true) // OPERADOR LÓGICO "AND"
        })
        botonesAgregarAlCarrito()
        limpiarBusqueda()
        const categoriaMensaje = categoriaProducto.substring(0, 1) + categoriaProducto.substring(1, ).toLowerCase()
        modificarFiltroBusqueda(categoriaMensaje)
    })
});