// Define una tarjeta reutilizable, no una página completa.
// Recibe los datos de un producto mediante props desde Inicio o Productos.
function Producto({ id, nombre, precio, imagen }: {
    // TypeScript comprueba que id y precio sean números,
    // y que nombre e imagen sean textos.
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
}) {
    // Devuelve lo que React mostrará para esta tarjeta.
    return (
        <article className="tarjeta-producto">
            {/* Imagen y nombre están dentro del enlace: ambos se pueden pulsar.
                ${id} inserta el número del producto, por ejemplo /producto/3.
                Pendiente: conectar esa dirección con la página de detalle. */}
            <a href={`/producto/${id}`}>
                <img src={imagen} alt={nombre} />
                <h3>{nombre}</h3>
            </a>
            {/* Muestra el precio con separador de miles en formato español. */}
            <p>{precio.toLocaleString('es-ES', { useGrouping: 'always' })} €</p>
        </article>
    )
}

// Para mostrar esta tarjeta en otro componente, primero se importa Producto
// y después se escribe <Producto /> pasándole id, nombre, precio e imagen.
// Podemos reutilizarla donde haga falta, como en Inicio y en Productos.

export default Producto