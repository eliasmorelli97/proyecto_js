const sectionCarrito = document.querySelector('.carrito')

let carrito

const obtenerDatosStorage = () => {
    carrito = localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [] // OPERADOR TERNARIO
}

const guardarDatosStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

// LIMPIAR PRODUCTOS MOSTRADOS

const limpiarProductos = () => {
    sectionCarrito.innerHTML = ''
}

// MOSTRAR JUNTO AL LOGO DEL CARRITO EL NÚMERO DE PRODUCTOS QUE HAY AGREGADOS

const logoCarrito = document.querySelector('.carrito')

const mostrarNumProductosCarrito = () => {
    let cantidadProductosCarrito = 0
    carrito.forEach((producto) => {
        cantidadProductosCarrito += producto.cantidad
    })
    const numProductosCarrito = document.querySelector('.numProductosCarrito')
    numProductosCarrito.innerHTML = cantidadProductosCarrito
}

// ELIMINAR PRODUCTO DEL CARRITO

const botonesEliminarProductoCarrito = () => {
    const btnEliminarProductoCarrito = document.querySelectorAll('.btnEliminarProductoCarrito')
    btnEliminarProductoCarrito.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault
            const idProducto = e.target.getAttribute('data-id')
            carrito = carrito.filter((producto) => producto.id != idProducto)
            guardarDatosStorage()
            limpiarProductos()
            mostrarProductosCarrito()
            mostrarNumProductosCarrito()
        })
    })
}

// SUMAR CANTIDAD A UN PRODUCTO

const botonesSumarCantidadProducto = () => {
    const btnsSumarRestarCantidadProducto = document.querySelectorAll('.btnSumar')
    btnsSumarRestarCantidadProducto.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault
            const idProducto = e.target.getAttribute('data-id')
            const index = carrito.indexOf(carrito.find((producto) => producto.id == idProducto));
            carrito[index].cantidad++
            guardarDatosStorage()
            limpiarProductos()
            mostrarProductosCarrito()
            mostrarNumProductosCarrito()
        })
    })
}

// RESTAR CANTIDAD A UN PRODUCTO

const botonesRestarCantidadProducto = () => {
    const btnsRestarCantidadProducto = document.querySelectorAll('.btnRestar')
    btnsRestarCantidadProducto.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault
            const idProducto = e.target.getAttribute('data-id')
            const productoSeleccionado = carrito.find((producto) => producto.id == idProducto)
            if (productoSeleccionado.cantidad > 1) {
                const index = carrito.indexOf(productoSeleccionado)
                carrito[index].cantidad--
                guardarDatosStorage()
                limpiarProductos()
                mostrarProductosCarrito()
                mostrarNumProductosCarrito()
            }
        })
    })
}

// VACIAR CARRITO

const vaciarCarrito = () => {
    carrito = []
    guardarDatosStorage()
    limpiarProductos()
    mostrarProductosCarrito()
    mostrarNumProductosCarrito()
}

const botonVaciarCarrito = () => {
    const btnVaciarCarrito = document.querySelector('.btnVaciarCarrito')
    btnVaciarCarrito.addEventListener('click', (e) => {
        e.preventDefault
        vaciarCarrito()
    })
}

// FINALIZAR COMPRA

const botonFinalizarCompra = () => {
    const btnFinalizarCompra = document.querySelector('.btnFinalizarCompra')
    btnFinalizarCompra.addEventListener('click', (e) => {
        e.preventDefault
        mensajeCompraFinalizada()
    })
}

const mensajeCompraFinalizada = async () => {
    await Swal.fire({
        html: `
            <div class="alert">
                <div class="alertImagen">
                    <img src="./media/icon.png" alt="Logo de Hardware Knights">
                </div>
                <div class="alertDetalle">
                    <strong>¡Compra finalizada con éxito!</strong>
                    <p>Gracias por comprar en Hardware Knights</p>
                </div>
            </div>
        `,
        width: '90%',
        background: '#222020'
    })
    vaciarCarrito()
}

// MOSTRAR PRODUCTOS DEL CARRITO

const mostrarProductosCarrito = () => {
    obtenerDatosStorage()
    if (carrito.length != 0) {
        let totalCarrito = 0
        carrito.forEach(({id, descripcion, imagen, precio, cantidad}) => { // DESESTRUCTURACIÓN DE OBJETO POR PARÁMETROS
            const nuevoDiv = document.createElement('div')
            nuevoDiv.innerHTML = `
                <article class="detalleProductoCarrito">
                    <img src="${imagen}" alt="${descripcion}">
                    <strong>${descripcion}</strong>
                    <div>
                        <span>Precio:</span>
                        <strong>$${precio}</strong>
                    </div>
                    <div class="cantidadProductoCarrito">
                        <div>
                            <span>Cantidad:</span>
                            <strong>${cantidad}</strong>
                        </div>
                        <div class="botonesSumarRestar">
                            <input type="button" value="+" class="btnSumar" data-id="${id}">
                            <input type="button" value="-" class="btnRestar" data-id="${id}">
                        </div>
                    </div>
                    <div>
                        <span>Total:</span>
                        <strong>$${precio * cantidad}</strong>
                    </div>
                </article>
                <input type="button" value="X" class="btnEliminarProductoCarrito" data-id="${id}">
            `
            nuevoDiv.classList.add('productoCarrito')
            sectionCarrito.append(nuevoDiv)
            totalCarrito += precio * cantidad
        })
        const nuevoDiv = document.createElement('div')
        nuevoDiv.innerHTML = `
            <span>TOTAL DEL CARRITO:</span>
            <strong>$${totalCarrito}</strong>
        `
        nuevoDiv.classList.add('totalCarrito')
        sectionCarrito.append(nuevoDiv)

        const nuevoDiv2 = document.createElement('div')
        nuevoDiv2.innerHTML = `
            <input type="button" value="Vaciar Carrito" class="btnCarrito btnVaciarCarrito">
            <input type="button" value="Finalizar Compra" class="btnCarrito btnFinalizarCompra">
        `
        nuevoDiv2.classList.add('botonesCarrito')
        sectionCarrito.append(nuevoDiv2)

        botonesEliminarProductoCarrito()
        botonesSumarCantidadProducto()
        botonesRestarCantidadProducto()
        botonVaciarCarrito()
        botonFinalizarCompra()
    } else {
        const nuevoH1 = document.createElement('h1')
        nuevoH1.innerHTML = 'No hay productos en el carrito'
        sectionCarrito.append(nuevoH1)
    }
}

obtenerDatosStorage()
mostrarProductosCarrito()
mostrarNumProductosCarrito()