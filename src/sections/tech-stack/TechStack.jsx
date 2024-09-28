import { useEffect } from 'react';
import { useState } from 'react';
import Stack from '../../components/stack/Stack';

const TechStack = () => {
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
    <picture className="absolute left-1/2 top-0 z-[2] block h-[550px] w-full max-w-[1440px] -translate-x-1/2 select-none z-0">
      <img src="https://www.eihabkhan.com/_next/image?url=%2Fassets%2Fgradient%2Fheader-gradient.png&w=1200&q=75" alt="gradient" className="w-full h-full"/>
    </picture>
        <h1 className="text-3xl font-bold z-10">Tech Stack</h1>
        <section className="grid grid-cols-4 grid-rows-2 gap-8 z-10">
            {data ? (
                data.stack.map((stack) => (
                    <Stack key={stack.name} name={stack.name} image={stack.image}  />
                ))
            ) : (
                <p>Carregando projetos...</p>
            )}
        </section>
    </section>
  )
}

export default TechStack