import { man_icon_header} from "../../assets"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex justify-center w-11/12 z-10">   
        <nav className="container mx-auto mt-8 h-16 w-full max-w-[1024px] items-center justify-between rounded-xl border-[1px] border-white/25 bg-white/10 px-4 backdrop-blur-md ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex gap-3">
            <img src={man_icon_header} alt=""  className="w-8"/>
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Murillo Oliveira</span>
          </div>
            <div className="hidden w-full md:block md:w-auto z-10" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
                <li>
                <Link to="/" className="block py-2 px-3 hover:text-blue-700 text-white rounded transform hover:scale-105 transition duration-300 md:bg-transparent md:p-0 dark:text-white">Sobre</Link>
                </li>
                <li>
                <Link to="/projetos" className="block py-2 px-3 text-white rounded hover:bg-gray-100 transform hover:scale-105 transition duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projetos</Link>
                </li>
                <li>
                <Link to="/stack" className="block py-2 px-3 text-white rounded hover:bg-gray-100 transform hover:scale-105 transition duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Tech-Stack</Link>
                </li>
                <li>
                <a href="/contato" className="block py-2 px-3 text-white rounded hover:bg-gray-100 transform hover:scale-105 transition duration-300 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contato</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
  )
}

export default Navbar