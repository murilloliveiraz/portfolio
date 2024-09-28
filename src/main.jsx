import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './sections/sobre/Sobre.jsx'
import Projetos from './sections/projetos/Projetos.jsx'
import TechStack from './sections/tech-stack/TechStack.jsx'
import Contato from './sections/contato/Contato.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Sobre /> },
      { path: '/projetos', element: <Projetos /> },
      { path: '/stack', element: <TechStack /> },
      { path: '/contato', element: <Contato /> },
      { path: '*', element: <Sobre /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
