import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
    <main className='flex flex-col justify-center items-center'>
    <Navbar />
    <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
