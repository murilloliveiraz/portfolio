import { Outlet } from 'react-router-dom'

function App() {

  return (
    <main className='flex flex-column justify-center items-center'>
    {/* <Navbar /> */}
    <Outlet />
    </main>
  )
}

export default App
