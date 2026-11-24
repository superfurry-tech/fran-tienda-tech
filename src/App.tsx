import './App.css'
import {
  BsArrowLeft,
  BsArrowRight,
  BsCart3,
  BsInstagram,
  BsYoutube
} from "react-icons/bs";

// Para gestionar valores que cambian en el componente.
import { useState } from 'react'

// Carga los datos de los productos desde el archivo JSON. Se reutilizarán en inicio, catálogo y detalle.
import productos from './data/productos.json'

// Importa el componente de la página de productos para poder mostrarlo desde App.
import Productos from './pages/Productos'

// Importa la tarjeta que también usaremos en la página de productos.
import Producto from './components/Producto'

// Importa la página donde mostraremos el producto seleccionado.
import DetalleProducto from './pages/DetalleProducto'

// Agrupa la imagen, el texto y el producto de cada diapositiva.
// productoId corresponde al id del producto en productos.json.
const diapositivas = [
  {
    imagen: "/images/portada_1.png",
    etiqueta: "CREA TU PROPIO ESTUDIO"
  },
  {
    imagen: "/images/portada_2.png",
    etiqueta: "NOVEDAD",
    productoId: 4
  },
  {
    imagen: "/images/portada_3.png",
    etiqueta: "OFERTA",
    productoId: 3,
    precioAnterior: 200
  }
]

// Componente principal de la tienda.
// .map() recorre el array y genera un elemento React <Producto /> por cada producto.
function App() {
  const nombre = 'Mi Podcast'

  // Comprueba si la dirección actual corresponde a la página de productos. Es true si estamos en /productos y false en cualquier otra dirección. True muestra el catálogo completo, false muestra la página de inicio.
  const esPaginaProductos = window.location.pathname === '/productos'

  // Comprueba si la dirección empieza por /producto/, como /producto/3.
  const esPaginaDetalle = window.location.pathname.startsWith('/producto/')

  // Índice de la imagen que se muestra en el carrusel. Inicialmente es la primera (0).
  const [indice, setIndice] = useState(0)

  // Obtiene los datos de la diapositiva que corresponde al índice actual.
  const diapositivaActual = diapositivas[indice]

  // Busca en el JSON el producto anunciado por la diapositiva actual.
  // Si no tiene productoId, como la primera imagen, no encuentra ninguno.
  const productoPromocionado = productos.find(
    producto => producto.id === diapositivaActual.productoId
  )

  // Avanza a la siguiente imagen. Si está en la última, vuelve a la primera.
  function siguienteImagen() {
    if (indice === diapositivas.length - 1) {
      setIndice(0)
    } else {
      setIndice(indice + 1)
    }
  }

  // Retrocede una imagen. Si esta en la primera, pasa a la última.
  function anteriorImagen() {
    if (indice === 0) {
      setIndice(diapositivas.length - 1)
    } else {
      setIndice(indice - 1)
    }
  }




  return (
    <>
      <header>
        <div className="marca">
          <img src="/images/onda-estudio-icono.png" alt="" />
          <h1>{nombre}</h1>
        </div>

        <nav aria-label="Navegación principal">
          <a href="/">Inicio</a>
          {/*Al pulsarlo, el navegador abre la dirección /productos. Pero el enlace no sabe qué componentes mostrar. Tiene que comprobar en const esPaginaProductos = window.location.pathname === '/productos'*/}
          <a href="/productos">Productos</a>
          <a href="/carrito" aria-label="Carrito">
            <BsCart3 aria-hidden="true" /></a>
        </nav>
      </header>
      {/* Según la dirección, muestra el catálogo, el detalle o el inicio.
    El header y el footer se mantienen en las tres vistas.
    Pendiente: conectar el carrito. */}
      {esPaginaProductos ? (
        <Productos />
      ) : esPaginaDetalle ? (
        <DetalleProducto />
      ) : (
        <main>
          <section className="presentacion">
            <div className="contenido-presentacion">

              <div className="texto-presentacion">
                <h2>Bienvenido a {nombre}</h2>
                <p>Monta tu propio estudio de podcast en casa. Micrófonos, auriculares, accesorios y kits completos.</p>
              </div>

              <div className="carrusel">
                {/* Muestra la imagen correspondiente al índice actual. */}
                <img src={diapositivaActual.imagen} alt="Estudio casero de podcast" />
                {/* Muestra el texto que corresponde a esa misma imagen. */}
                <div className="etiqueta-carrusel">
                  {/* La primera imagen no necesita otra clase. En NOVEDAD y OFERTA añadimos una clase para darles un estilo distinto. */}
                  <p className={indice === 0 ? "" : "tipo-promocion"}>
                    {diapositivaActual.etiqueta}
                  </p>

                  {/* && significa 'mostrar solo si cumple la condición'. */}
                  {/* Conserva el estilo común y añade otro para destacar el nombre */}
                  {/* Si la diapositiva anuncia un producto, muestra su nombre desde el JSON.*/}
                  {productoPromocionado && (
                    <p className="nombre-carrusel titulo-producto-carrusel">
                      <strong>{productoPromocionado.nombre}</strong>
                    </p>
                  )}

                  {/* Muestra los precios de OFERTA: el anterior tachado y el actual en negrita.
    Solo aparece si hay un producto y la diapositiva tiene precioAnterior.*/}
                  {productoPromocionado && diapositivaActual.precioAnterior !== undefined && (
                    <p className="nombre-carrusel">
                      <del>
                        {diapositivaActual.precioAnterior.toLocaleString('es-ES', {
                          useGrouping: 'always'
                        })} €
                      </del>
                      <strong>
                        {productoPromocionado.precio.toLocaleString('es-ES', {
                          useGrouping: 'always'
                        })} €
                      </strong>
                    </p>
                  )}

                  {/* Abre el detalle del producto anunciado.*/}
                  {productoPromocionado && (
                    <a
                      className="enlace-promocion"
                      href={`/producto/${productoPromocionado.id}`}
                    >
                      Ver producto
                    </a>
                  )}
                </div>
                <div className="botones-carrusel">
                  <button onClick={anteriorImagen} aria-label="Imagen anterior"><BsArrowLeft /></button>
                  <button onClick={siguienteImagen} aria-label="Imagen siguiente"><BsArrowRight /></button>
                </div>
                <div className="indicadores-carrusel">
                  {/* Si el índice coincide con la imagen actual, añade la clase "activo", que cambia el color en CSS. */}
                  <span className={indice === 0 ? "activo" : ""}></span>
                  <span className={indice === 1 ? "activo" : ""}></span>
                  <span className={indice === 2 ? "activo" : ""}></span>
                </div>
              </div>

            </div>
          </section>
          <section className="catalogo">
            <h2>Catálogo de productos</h2>
            <div className="lista-productos">
              {/* Recorre la lista del JSON y muestra una tarjeta Producto por cada elemento, pasándole su id, nombre, precio e imagen. */}
              {productos.map(producto => (
                <Producto
                  key={producto.id}
                  id={producto.id}
                  nombre={producto.nombre}
                  precio={producto.precio}
                  imagen={producto.imagen} />
              ))}
            </div>
          </section>
        </main>
      )}

      <footer>
        <div className="contenido-footer">
          <div>
            <h2>{nombre}</h2>
          </div>

          <div>
            <h3>Información</h3>
            <p>Contacto</p>
            <p><a>Envíos y devoluciones</a></p>
            <p><a>Garantía</a></p>
            <p><a>Política de privacidad</a></p>
          </div>

          <div className="copyright">
            <div className="redes-sociales">
              <a aria-label="Instagram">
                <BsInstagram aria-hidden="true" />
              </a>
              <a aria-label="YouTube">
                <BsYoutube aria-hidden="true" />
              </a>
            </div>
            <p>© 2026 {nombre} · Proyecto académico</p>
            <p><em>Tu estudio de podcast empieza aquí.</em></p>
          </div>
        </div>
      </footer>

    </>
  )
}



export default App

