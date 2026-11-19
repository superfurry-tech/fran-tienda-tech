// Importa la lista donde buscaremos el producto seleccionado.
import productos from '../data/productos.json'

// Página donde se mostrará la información del producto seleccionado.
function DetalleProducto() {
    // Divide la dirección por las barras.
    // Por ejemplo, /producto/3 se convierte en ["", "producto", "3"].
    const partesRuta = window.location.pathname.split('/')

    // En la posición 2 está el id escrito en la dirección, no el segundo producto.
    // Por ejemplo, en /producto/7 se obtiene "7" y lo se convierte al número 7.
    const id = Number(partesRuta[2])

    // Busca el producto cuyo id coincide con el de la dirección.
    // Si no existe, find devuelve undefined.
    // Pendiente: mostrar sus datos o un mensaje si no se encuentra. No map porque se busca un solo producto, no se generan tarjetas para todos.
    const producto = productos.find(producto => producto.id === id)

    // Si no se encuentra el producto, muestra un mensaje y termina aquí.
    // Pendiente: mostrar los datos cuando el producto sí existe.
    if (!producto) {
        return (
            <main>
                <section className="detalle-producto">
                    <h1>Producto no encontrado</h1>
                    <a href="/productos">Volver a productos</a>
                </section>
            </main>
        )
    }

    // Muestra los datos del producto encontrado en el JSON.
    // Pendiente: dar estilo al detalle y añadir la función de carrito.
    // Muestra imagen e información en dos bloques para distribuirlos con CSS.
    // Pendiente: añadir la función de carrito.
    return (
        <main>
            <section className="detalle-producto">
                <div className="contenido-detalle">
                    <img src={producto.imagen} alt={producto.nombre} />

                    <div className="informacion-producto">
                        <h1>{producto.nombre}</h1>
                        <p>{producto.descripcion}</p>
                        {/* Muestra el precio con separador de miles, sin cambiar el dato del JSON. */}
                        <p className="precio-producto">
                            {producto.precio.toLocaleString('es-ES', { useGrouping: 'always' })} €
                        </p>
                        <a href="/productos">Volver a productos</a>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DetalleProducto