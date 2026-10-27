import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Busca el div "root" de index.html e inicia React dentro de él.
// render muestra el componente App.
// StrictMode ayuda a detectar errores durante el desarrollo.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
