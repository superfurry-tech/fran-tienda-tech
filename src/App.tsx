import './App.css'


const productos = [
  { id: 1, nombre: "Monitor", precio: 150 },
  { id: 2, nombre: "Ratón", precio: 25 },
  { id: 3, nombre: "Teclado", precio: 50 },
  { id: 4, nombre: "Portátil", precio: 799 }
]

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
            <Producto key={producto.id} nombre={producto.nombre} precio={producto.precio} />
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

function Producto({ nombre, precio }: { nombre: string; precio: number }) {
  return (
    <article className="tarjeta-producto">
      <h3>{nombre}</h3>
      <p>{precio} €</p>
    </article>
  )
}

export default App

