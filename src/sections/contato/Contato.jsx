import { mail, linkedin } from "../../assets"
import murilloContato from "/src/assets/contato.png"

const Contato = () => {
  return (
    <section className="grid grid-cols-2 h-screen w-10/12 relative mt-[-100px]">
    <picture className="absolute left-1/2 top-0 z-0 block h-[550px] w-full max-w-[1440px] -translate-x-1/2 select-none">
      <img src="https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&w=1200&q=75" alt="gradient" className="w-full h-full"/>
    </picture>
    
    <div className="flex items-center justify-center z-10">
        <article className="flex flex-col items-start justify-center gap-10 w-9/12">
          <h1 className="text-white text-5xl font-bold">Vamos trabalhar juntos ?</h1>
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