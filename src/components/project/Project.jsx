/* eslint-disable react/prop-types */
const Project = (props) => {
  return (
        <article className="relative z-10 overflow-hidden rounded-3xl border-[1px] mb-20 border-light-border bg-onyx-bg p-6 grid grid-cols-2 w-8/12 h-[565px] cursor-pointer transform hover:scale-[102%] transition duration-300" key={props.title}>
            <div className="h-full flex flex-col gap-[40px]">
                <div className="flex flex-col gap-6">
                    <img src={props.logo} alt="logo do projeto" className="w-32"/>
                    <h1 className="text-5xl font-bold ">{props.title}</h1>
                    <p className="text-gray-400 text-justify">{props.description}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                {props ? (
                    props.stack.map((stack) => (
                        <span key={stack} className="bg-purple-400 text-indigo-950 text-sm font-medium me-2 px-2.5 py-0.5 rounded">{stack}</span>
                    ))
                    ) : (
                    <p>Carregando a stack</p>
                    )}
                </div>
                <button type="button" className="text-white bg-[#24292F] font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-52">
                <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                </svg>
                Visite no Github
                </button>
            </div>
            <picture className="flex justify-center">
                <img src={props.image} alt="imagem do projeto" className="w-[330px] rotate-6 object-contain"/>
            </picture>
        </article>
  )
}

export default Project
