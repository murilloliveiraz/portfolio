import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sobre from './sections/sobre/Sobre.jsx'
import Project from './components/project/Project.jsx'
import Stack from './components/stack/Stack.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Sobre /> },
      { path: '/card', element: <Project /> },
      { path: '/stack', element: <Stack /> },
      { path: '*', element: <Sobre /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
