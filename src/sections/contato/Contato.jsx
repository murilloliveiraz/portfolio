import mail from "/assets/mail.webp"
import linkedin from "/assets/linkedin.svg"
import murilloContato from "/assets/contato.png"
import { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    email: '',
    telefone: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Telefone:", formData.telefone);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <section className="grid gap-20 pt-[150px] md:grid-cols-2 h-screen w-10/12 relative mt-[-100px]">
    <picture className="absolute left-1/2 top-0 z-0 block h-[550px] w-full max-w-[1440px] -translate-x-1/2 select-none">
      <img src="https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&w=1200&q=75" alt="gradient" className="w-full h-full"/>
    </picture>
    
    <div className="flex items-center justify-center z-10">
        <article className="flex flex-col items-start justify-center gap-10 w-9/12">
          <h1 className="text-white text-5xl font-bold">Vamos trabalhar juntos ?</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex gap-5 items-center justify-between">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="rounded-lg bg-white/10 backdrop-blur-md"
                placeholder="email@email.com"
              />
            </div>
            <div className="flex gap-5 items-center justify-between">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleInputChange}
                className="rounded-lg bg-white/10 backdrop-blur-md"
                placeholder="11 912345678"
              />
            </div>
            <button type="submit" className="w-full bg-gray-300 text-gray-800 rounded-lg h-9 font-bold">Enviar</button>
          </form>
          <p>Me contate via rede social ou via email:</p>
          <div className="flex gap-3 flex-col">
            <a href="https://www.linkedin.com/in/murilloliveiraz/" className="flex gap-5 items-center text-xl bold cursor-pointer transform hover:scale-105 transition duration-300"><img src={linkedin} alt="linkedin"/> Linkedin</a>
            <a href="#" className="flex gap-5 items-center text-xl bold w-9 cursor-pointer transform hover:scale-105 transition duration-300"><img src={mail} alt="email"/> murillo1047@gmail.com</a>
          </div>
        </article>
    </div>
    
    <div className="flex items-end justify-center">
      <img src={murilloContato} alt="murillo meoji"/>
    </div>
  </section>
  )
}

export default Contato