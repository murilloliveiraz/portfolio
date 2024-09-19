import { github, linkedin, man_icon_header, sobre_illustration, tchauzin } from "../../assets"

const Sobre = () => {
  return (
    <section className="grid grid-cols-2 h-screen place-items-center content-center">
        <article className="flex flex-col items-start h-full gap-5">
            <div className="flex gap-3">
                <img src={tchauzin} alt="" className="w-8 h-8" />
                <h4 className="text-white text,0-lg">Hello World!</h4>
            </div>
            <h1 className="text-white text-3xl">Murillo <br/> Oliveira</h1>
            <div className="flex gap-2 items-center">
                <img src={man_icon_header} alt=""  className="w-8"/>
                <h4 className="text-white ">FullStack Developer</h4>
            </div>
            <div className="flex">
                <a href="https://github.com/murilloliveiraz"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/murilloliveiraz/"><img src={linkedin} alt="" /></a>
            </div>
        </article>
        <img src={sobre_illustration} alt="" className="w-3/4"></img>
    </section>
  )
}

export default Sobre