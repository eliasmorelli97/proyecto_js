let indicarProducto = true
let totalCarrito = 0

while (indicarProducto) {
    let idProducto = prompt('Indique el número del producto que desea agregar al carrito:\n\n1. Motherboard\n2. Procesador\n3. Memoria Ram\n4. Fuente de poder\n5. HDD\n6. SSD\n7. Gabinete')

    switch (idProducto) {
        case '1':
            totalCarrito = totalCarrito + 15000
            agregarProducto()
            break;

        case '2':
            totalCarrito = totalCarrito + 45000
            agregarProducto()
            break;

        case '3':
            totalCarrito = totalCarrito + 8000
            agregarProducto()
            break;

        case '4':
            totalCarrito = totalCarrito + 10000
            agregarProducto()
            break;

        case '5':
            totalCarrito = totalCarrito + 4000
            agregarProducto()
            break;

        case '6':
            totalCarrito = totalCarrito + 6000
            agregarProducto()
            break;

        case '7':
            totalCarrito = totalCarrito + 12000
            agregarProducto()
            break;
    
        default:
            alert('Opción inválida, vuelva a intentarlo')
            break;
    }
}

alert("El total de tu carrito es: $" + totalCarrito)

function agregarProducto() {
    let repetir = true

    while (repetir) {
        let opcion = prompt('¿Desea agregar otro producto al carrito?\n\n1. Si\n2. No')

        if (opcion == '1') {
            repetir = false
        }

        else if (opcion == '2') {
            indicarProducto = false
            repetir = false
        }

        else {
            alert('Opción inválida, vuelva a intentarlo')
        }
    }
}