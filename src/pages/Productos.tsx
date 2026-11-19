// Creación de la página Productos, que muestra el catálogo completo de productos.
// Datos del catálogo (productos) y tarjeta (Producto) reutilizable.
import productos from '../data/productos.json'
import Producto from '../components/Producto'

// Página del catálogo completo.
function Productos() {
    return (
        <main>
            <section className="catalogo">
                <h1>Productos</h1>

                <div className="lista-productos">
                    {/* Recorre la lista del JSON y muestra una tarjeta Producto por cada elemento,pasándole su id, nombre, precio e imagen. */}
                    {productos.map(producto => (
                        <Producto
                            key={producto.id}
                            id={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            imagen={producto.imagen}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default Productos