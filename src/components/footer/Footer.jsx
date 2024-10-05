import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-onyx text-white py-4 flex items-center justify-center">
      <FaCopyright className="mr-2" /> {/* Ícone de copyright */}
      <span>2024 © Murillo Oliveira</span>
    </footer>
  )
}

export default Footer