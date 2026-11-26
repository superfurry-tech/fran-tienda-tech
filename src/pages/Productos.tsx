// Creación de la página Productos, que muestra el catálogo completo de productos.
// Datos del catálogo (productos) y tarjeta (Producto) reutilizable.
import productos from '../data/productos.json'
import Producto from '../components/Producto'

// Página del catálogo completo.
function Productos() {
    // Lee el texto enviado desde el buscador de la cabecera.
    const busqueda = new URLSearchParams(window.location.search).get('buscar') ?? ''
    const textoBuscado = busqueda.trim().toLowerCase()

    // Filtra por nombre o descripción sin distinguir mayúsculas.
    // Con el texto vacío, todos los productos coinciden.
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBuscado) ||
        producto.descripcion.toLowerCase().includes(textoBuscado)
    )

    return (
        <main>
            <section className="catalogo">
                <h1>Productos</h1>

                {textoBuscado && <p className="resultado-busqueda">Resultados para «{busqueda.trim()}»</p>}
                {productosFiltrados.length === 0 && (
                    <p className="resultado-busqueda">No se han encontrado productos.</p>
                )}

                <div className="lista-productos">
                    {/* Muestra una tarjeta por cada producto que coincide con la búsqueda. */}
                    {productosFiltrados.map(producto => (
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