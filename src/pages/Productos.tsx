// Creación de la página Productos, que muestra el catálogo completo de productos.
// Datos del catálogo (productos) y tarjeta (Producto) reutilizable.
import productos from '../data/productos.json'
import Producto from '../components/Producto'

// Página del catálogo completo.
function Productos() {
    // Recoge los parámetros de la dirección: búsqueda y número de página.
    const parametros = new URLSearchParams(window.location.search)

    // Recupera la búsqueda; si no existe, utiliza texto vacío.
    const busqueda = parametros.get('buscar') ?? ''

    // Lee la página y la convierte a número; si no se indica, empieza en la 1.
    // Pendiente: usarla para elegir qué productos mostrar.
    const pagina = Number(parametros.get('pagina') ?? '1')
    const textoBuscado = busqueda.trim().toLowerCase()

    // Filtra por nombre o descripción sin distinguir mayúsculas.
    // Con el texto vacío, todos los productos coinciden.
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(textoBuscado) ||
        producto.descripcion.toLowerCase().includes(textoBuscado)
    )

    // Cantidad de productos que mostraremos en cada página.
    const productosPorPagina = 5

    // Calcula la posición del primer producto de la página.
    // Página 1: empieza en 0. Página 2: empieza en 5.
    const inicio = (pagina - 1) * productosPorPagina

    // Toma solo los productos de esta página, sin modificar la lista.
    // Pendiente: añadir los enlaces para cambiar de página.
    const productosPagina = productosFiltrados.slice(
        inicio,
        inicio + productosPorPagina
    )

    // Calcula las páginas necesarias: 10 productos / 5 = 2 páginas.
    // Math.ceil redondea hacia arriba: 6 productos también necesitan 2 páginas.
    const totalPaginas = Math.ceil(productosFiltrados.length / productosPorPagina)

    // Crea la lista de números de página: por ejemplo, [1, 2].
    const numerosPagina = Array.from(
        { length: totalPaginas },
        (_, indice) => indice + 1
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
                    {productosPagina.map(producto => (
                        <Producto
                            key={producto.id}
                            id={producto.id}
                            nombre={producto.nombre}
                            precio={producto.precio}
                            imagen={producto.imagen}
                        />
                    ))}
                </div>
                {/* Permite cambiar de página conservando el texto de búsqueda.*/}
                <nav className="paginacion" aria-label="Páginas de productos">
                    {numerosPagina.map(numero => (
                        <a
                            key={numero}
                            href={`/productos?buscar=${encodeURIComponent(busqueda)}&pagina=${numero}`}
                            aria-current={numero === pagina ? 'page' : undefined}
                        >
                            {numero}
                        </a>
                    ))}
                </nav>
            </section>
        </main>
    )
}

export default Productos