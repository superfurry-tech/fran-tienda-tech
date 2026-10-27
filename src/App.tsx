import './App.css'

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

// Componente principal de la tienda.
// .map() recorre el array y genera un elemento React <Producto /> por cada producto.
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

