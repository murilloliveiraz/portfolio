import { useEffect } from 'react';
import { useState } from 'react';
import Project from './../../components/project/Project';
import { Link } from 'react-router-dom';

const Projetos = () => {
  const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/dados/data.json")
        .then((response) => {
        if (!response.ok) {
            throw new Error("Erro ao buscar o JSON: " + response.status);
        }
        return response.json();
        })
        .then((data) => {
        setData(data);
        })
        .catch((error) => console.error("Error fetching the JSON:", error));
    }, []);

  return (
    <section className="flex flex-col gap-10 mt-10 justify-center items-center">
        <picture className="absolute left-1/2 top-0 block h-[550px] w-full max-w-[1440px] -translate-x-1/2 select-none z-0">
          <img src="https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&w=1200&q=75" alt="gradient" className="w-full h-full"/>
        </picture>
        <h1 className="text-3xl font-bold z-10">Projetos</h1>
        {data ? (
            data.projects.map((project, index) => (
              <Link key={index} to={`/projetos/${index}`} className="flex justify-center items-center">
                <Project title={project.title} description={project.description} logo={project.logo} image={project.image} stack={project.stack} link={project.link}/>
              </Link>
            ))
          ) : (
            <p>Carregando projetos...</p>
          )}
    </section>
  )
}

export default Projetos