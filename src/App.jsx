import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <main className='flex flex-col justify-center items-center'>
    <Navbar />
    <Outlet />
    </main>
  )
}

export default App
