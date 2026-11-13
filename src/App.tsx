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

// Array de objetos con los datos de nuestros productos.
const productos = [
  { id: 1, nombre: "Rode PodMic", precio: 110, imagen: "/images/micro1.jpg" },
  { id: 2, nombre: "t.bone BC 500 Bundle", precio: 119, imagen: "/images/micro2.jpg" },
  { id: 3, nombre: "Rode PodMic USB", precio: 177, imagen: "/images/micro3.jpg" },
  { id: 4, nombre: "AKG K-702", precio: 179, imagen: "/images/auriculares1.jpg" },
  { id: 5, nombre: "Sennheiser HD-480 PRO Plus", precio: 435, imagen: "/images/auriculares2.jpg" },
  { id: 6, nombre: "t.bone SC 420 USB Kit", precio: 199, imagen: "/images/set1.jpg" },
  { id: 7, nombre: "t.bone MB 7 Beta Kit", precio: 304, imagen: "/images/set2.jpg" },
  { id: 8, nombre: "K&M 25995 Soporte", precio: 59, imagen: "/images/accesorio1.jpg" },
  { id: 9, nombre: "Filtro antipop PS-1", precio: 56, imagen: "/images/accesorio2.jpg" },
  { id: 10, nombre: "Auralex Roominator-DST Kit", precio: 1220, imagen: "/images/accesorio3.jpg" }
]

// Rutas de las imágenes del carrusel, almacenadas en un array de strings. Cada elemento es un string, no hay necesidad de crear objetos como en el array de productos.
const imagenes = [
  "/images/portada_1.png",
  "/images/portada_2.png",
  "/images/portada_3.png"
]

//Textos que corresponden a las imágenes del carrusel. Cada texto ocupa la misma posición que su imagen en el array imagenes.
const etiquetas = [
  "CREA TU PROPIO ESTUDIO",
  "NOVEDAD",
  "OFERTA"
]

// Componente principal de la tienda.
// .map() recorre el array y genera un elemento React <Producto /> por cada producto.
function App() {
  const nombre = 'Mi Podcast'

  // Índice de la imagen que se muestra en el carrusel. Inicialmente es la primera (0).
  const [indice, setIndice] = useState(0)

  // Avanza a la siguiente imagen. Si estamos en la última, vuelve a la primera.
  function siguienteImagen() {
    if (indice === imagenes.length - 1) {
      setIndice(0)
    } else {
      setIndice(indice + 1)
    }
  }

  // Retrocede una imagen. Si estamos en la primera, pasa a la última.
  function anteriorImagen() {
    if (indice === 0) {
      setIndice(imagenes.length - 1)
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
          <a href="/productos">Productos</a>
          <a href="/carrito" aria-label="Carrito">
            <BsCart3 aria-hidden="true" /></a>
        </nav>
      </header>
      <main>
        <section className="presentacion">
          <div className="contenido-presentacion">

            <div>
              <h2>Bienvenido a {nombre}</h2>
              <p>Monta tu propio estudio de podcast en casa. Micrófonos, auriculares, accesorios y kits completos.</p>
            </div>

            <div className="carrusel">
              {/* Muestra la imagen correspondiente al índice actual. */}
              <img src={imagenes[indice]} alt="Estudio casero de podcast" />
              {/* Muestra el texto que corresponde a esa misma imagen. */}
              <div className="etiqueta-carrusel">
                <p>{etiquetas[indice]}</p>

                {/* && significa 'mostrar solo si cumple la condición'. */}
                {indice === 1 && <p className="nombre-carrusel"><strong>AKG K-702</strong></p>}

                {indice === 2 && (
                  <>
                    <p className="nombre-carrusel"><strong>Rode PodMic USB</strong></p>
                    <p className="nombre-carrusel">
                      <del>200 €</del> <strong>177 €</strong>
                    </p>
                  </>
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
        <section>
          <h2>Catálogo de productos</h2>
          <div className="lista-productos">
            {productos.map(producto => (
              <Producto
                key={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen} />
            ))}
          </div>
        </section>
      </main>

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
            <p>Tu estudio de podcast empieza aquí.</p>
          </div>
        </div>
      </footer>

    </>
  )
}

// Recibe las props (nombre, precio e imagen) que le pasa App.
// Devuelve una tarjeta HTML con los datos de ese producto.
function Producto({ nombre, precio, imagen }: { nombre: string; precio: number; imagen: string }) {
  return (
    <article className="tarjeta-producto">
      <img src={imagen} alt={nombre} />
      <h3>{nombre}</h3>
      <p>{precio} €</p>
    </article>
  )
}

export default App

