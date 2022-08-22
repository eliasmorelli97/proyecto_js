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
    const eliminarProductoCarrito = document.querySelectorAll('.btnEliminarProductoCarrito')
    eliminarProductoCarrito.forEach((button) => {
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
    const sumarRestarCantidadProducto = document.querySelectorAll('.btnSumar')
    sumarRestarCantidadProducto.forEach((button) => {
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
    const RestarCantidadProducto = document.querySelectorAll('.btnRestar')
    RestarCantidadProducto.forEach((button) => {
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
        botonesEliminarProductoCarrito()
        botonesSumarCantidadProducto()
        botonesRestarCantidadProducto()
    } else {
        const nuevoH1 = document.createElement('h1')
        nuevoH1.innerHTML = 'No hay productos en el carrito'
        sectionCarrito.append(nuevoH1)
    }
}

obtenerDatosStorage()
mostrarProductosCarrito()
mostrarNumProductosCarrito()