import './App.css'

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

// Cada elemento es un string, no hay necesidad de crear objetos como en el array de productos
const imagenes = [
  "/images/portada_1.png",
  "/images/portada_2.png",
  "/images/portada_3.png"
]

// Componente principal de la tienda.
// .map() recorre el array y genera un elemento React <Producto /> por cada producto.
function App() {
  const nombre = 'Mi PC'

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
        <h1>{nombre}</h1>
      </header>
      <main>
        <section className="presentacion">
          <div className="contenido-presentacion">

            <div>
              <h2>Bienvenido a {nombre}</h2>
              <p>Monta tu propio estudio de podcast en casa. Micrófonos, auriculares, accesorios y kits completos.</p>
            </div>

            <div className="carrusel">
              <img src={imagenes[indice]} alt="Estudio casero de podcast" />
              <div className="botones-carrusel">
                <button onClick={anteriorImagen} aria-label="Imagen anterior">←</button>
                <button onClick={siguienteImagen} aria-label="Imagen siguiente">→</button>
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
        <p>© 2026 Mi PC. Todos los derechos reservados.</p>
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

