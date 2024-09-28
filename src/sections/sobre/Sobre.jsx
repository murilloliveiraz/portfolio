import { github, linkedin, man_icon_header, tchauzin } from "../../assets"
import murilloHome from "/src/assets/home.png"

const Sobre = () => {
  return (
    <section className="grid grid-cols-2 h-screen w-10/12 relative mt-[-100px]">
    <picture className="absolute left-1/2 top-0 z-[2] block h-[550px] w-full max-w-[1440px] -translate-x-1/2 select-none">
      <img src="https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&w=1200&q=75" alt="gradient" className="w-full h-full"/>
    </picture>
    
    <div className="flex items-center justify-center">
        <article className="flex flex-col items-start justify-center gap-5 w-9/12">
          <div className="flex gap-3 pt-10">
            <img src={tchauzin} alt="" className="w-8 h-8" />
            <h1 className="text-white text-3xl">Hello World!</h1>
          </div>
          <h1 className="text-white text-5xl font-bold"><span className="text-gray-400">Me chamo <br /></span> Murillo Oliveira</h1>
          <div className="flex gap-2 items-center">
            <img src={man_icon_header} alt=""  className="w-8"/>
            <h4 className="text-white ">FullStack Developer</h4>
          </div>
          <p className="text-lg text-gray-400 text-justify">Engenheiro de software Fullstack, apaixonado por transformar ideias em soluções digitais completas. Especializado no desenvolvimento de aplicações web modernas e escaláveis, utilizando tecnologias como C#, .NET Core, React.js e Angular.</p>
          <div className="flex gap-3">
            <a href="https://github.com/murilloliveiraz"><img src={github} alt="" /></a>
            <a href="https://www.linkedin.com/in/murilloliveiraz/"><img src={linkedin} alt="" /></a>
          </div>
        </article>
    </div>
    
    <div className="flex items-end justify-center">
      <img src={murilloHome} alt="murillo meoji"/>
    </div>
  </section>
  )
}

export default Sobre