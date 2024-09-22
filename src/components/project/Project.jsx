import vitalLogo from "/src/assets/logo_vital.png"
import vitalBanner from "/src/assets/vital.png"

const Project = () => {
  return (
    <article className="relative overflow-hidden rounded-3xl border-[1px] border-light-border bg-onyx-bg p-6 grid grid-cols-2 w-8/12 h-[565px]">
        <div className="h-full flex flex-col justify-around">
            <div className="flex flex-col gap-4">
                <img src={vitalLogo} alt="logo do projeto" className="w-32"/>
                <h1 className="text-5xl font-bold">VITAL</h1>
                <p className="text-gray-400 text-justify">Startup especializada em soluções de software para o setor de saúde, focada na resolução de problemas relacionados à centralização de dados, telemedicina e disponibilização de laudos e resultados médicos. Nossa plataforma integra-se ao Mercado Pago para facilitar pagamentos e utiliza a API do Google Meet para a geração de consultas online.</p>
            </div>
            <div className="flex flex-wrap gap-3">            
                <span className="bg-purple-400 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">.NET</span>
                <span className="bg-red-400 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Angular</span>
                <span className="bg-blue-400 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Typescript</span>
                <span className="bg-yellow-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">AWS</span>
                <span className="bg-green-200 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">MongoDB</span>
                <span className="bg-blue-300 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">PostgresSQL</span>
                <span className="bg-red-400 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Amazon S3</span>
                <span className="bg-pink-400 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Terraform</span>
            </div>
            <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
            <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
            </svg>
            Visite no Github
            </button>
        </div>
        <picture className="flex justify-center">
            <img src={vitalBanner} alt="imagem do projeto" className="w-[330px] rotate-6 object-contain"/>
        </picture>
    </article>
  )
}

export default Project