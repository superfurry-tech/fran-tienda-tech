import './App.css'

// array de productos para guardar datos
const productos = [
  { id: 1, nombre: "Rode PodMic", precio: 110,  imagen: "/images/micro1.jpg" },
  { id: 2, nombre: "the t.bone BC 500 Bundle", precio: 119,  imagen: "/images/micro2.jpg" },
  { id: 3, nombre: "Rode PodMic USB", precio: 177,  imagen: "/images/micro3.jpg" },
  { id: 4, nombre: "AKG K-702", precio: 179,  imagen: "/images/auriculares1.jpg" },
  { id: 5, nombre: "Sennheiser HD-480 PRO Plus", precio: 435,  imagen: "/images/auriculares2.jpg" },
  { id: 6, nombre: "the t.bone SC 420 USB Podcast Pro Bundle", precio: 199,  imagen: "/images/set1.jpg" },
  { id: 7, nombre: "the t.bone MB 7 Beta Podcast Pro Bundle", precio: 304,  imagen: "/images/set2.jpg" },
  { id: 8, nombre: "K&M 25995 Table/Floor Microphone Stand", precio: 59,  imagen: "/images/accesorio1.jpg" },
  { id: 9, nombre: "FILTRO ANTIPOP PS-1", precio: 56,  imagen: "/images/accesorio2.jpg" },
  { id: 10, nombre: "Auralex Roominator-DST Kit", precio: 1220,  imagen: "/images/accesorio3.jpg" }
]

// .map() recorre el array y genera un elemento <Producto /> por cada producto.
function App() {
  const nombre = 'Mi PC'

  return (
    <>
      <header>
        <h1>{nombre}</h1>
      </header>
      <main>
        <section>
          <h2>Productos destacados</h2>
          <div className="lista-productos">
          {productos.map(producto => (
            <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} imagen={producto.imagen} />
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

// Recibe las props del producto y muestra su nombre, precio e imagen en una tarjeta.
function Producto({ nombre, precio, imagen}: { nombre: string; precio: number; imagen: string }) {
  return (
    <article className="tarjeta-producto">
      <h3>{nombre}</h3>
      <p>{precio} €</p>
      <img src={imagen} alt={nombre} />    
    </article>
  )
}

export default App

