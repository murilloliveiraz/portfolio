import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Project from '../../components/project/Project';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProjects] = useState(null);

    useEffect(() => {
        if (id) {
          fetch("/dados/data.json")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              const projects = data.projects[id];
              setProjects(projects);
            })
            .catch((error) => console.error("Error fetching the JSON:", error));
    }
    }, [id]);

    if (!project) {
    return <div>Carregando...</div>;
    }

  return (
    <section className="flex flex-col gap-10 mt-10 justify-center items-center">
        <picture className="absolute left-1/2 top-0 block h-[550px] w-full max-w-[1440px] -translate-x-1/2 select-none z-0">
          <img src="https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&w=1200&q=75" alt="gradient" className="w-full h-full"/>
        </picture>
        <Project title={project.title} description={project.description} logo={project.logo} image={project.image} stack={project.stack} link={project.link}/>
    </section>
  )
}

export default ProjectDetails