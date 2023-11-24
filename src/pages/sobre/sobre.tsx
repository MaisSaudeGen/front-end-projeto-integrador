import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import beatrizImage from "../../assets/images/sobre/Beatriz.jpeg";
import eliasImage from "../../assets/images/sobre/Elias.jpeg";
import filipiImage from "../../assets/images/sobre/Filipi.jpeg";
import matheusImage from "../../assets/images/sobre/Matheus.jpeg";
import mayaraImage from "../../assets/images/sobre/Mayara.jpeg";
import stephannyImage from "../../assets/images/sobre/Stephanny.jpeg";
import thamiresImage from "../../assets/images/sobre/Thamires.jpeg";

interface MembroProps {
  membro: {
    nome: string;
    foto: string;
    linkedin: string;
    github: string;
  };
}

const membros = [
  {
    nome: "Beatriz Lima",
    foto: beatrizImage,
    linkedin: "http://www.linkedin.com/in/beatrizdlima",
    github: "https://github.com/beadlim",
  },
  {
    nome: "Elias Moura",
    foto: eliasImage,
    linkedin: "https://www.linkedin.com/in/elias-s-moura/",
    github: "https://github.com/Elias-Moura",
  },
  {
    nome: "Filipi Barbosa",
    foto: filipiImage,
    linkedin: "https://www.linkedin.com/in/filipi-barbosa-sp/",
    github: "https://github.com/Filipi231",
  },
  {
    nome: "Matheus William",
    foto: matheusImage,
    linkedin: "https://www.linkedin.com/in/matheus-william140867/",
    github: "https://github.com/MJCatafesta",
  },
  {
    nome: "Mayara Leal",
    foto: mayaraImage,
    linkedin: "http://www.linkedin.com/in/mayaracleal",
    github: "https://github.com/Maycleal",
  },
  {
    nome: "Stephanny Chaves",
    foto: stephannyImage,
    linkedin: "https://www.linkedin.com/in/stefanny-chaves/",
    github: "https://github.com/Sterchaves",
  },
  {
    nome: "Thamires Pereira",
    foto: thamiresImage,
    linkedin: "https://www.linkedin.com/in/thamirespereira-dev/",
    github: "https://github.com/thamirespereira",
  },
];

const MembroComponent: React.FC<MembroProps> = ({ membro }) => {
  return (
    <div className="bg-blue-100 rounded-lg shadow-xl p-5 hover:scale-105 
      flex justify-around items-center gap-2 text-center m-2
      
      ">
      <div className="rounded-full overflow-hidden w-32 h-32">
        <img
          src={membro.foto}
          alt={`Foto de ${membro.nome}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="text-left mt-2">
        <h2 className="text-lg font-semibold">{membro.nome}</h2>
        <div className="flex justify-center">
          <a
            href={membro.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 mx-2"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a
            href={membro.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:text-black mx-2"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Sobre: React.FC = () => {
  return (
    <section className="gap-20 p-2 flex flex-col items-center justify-center pt-[90px]">
      <div className="flex flex-col items-center justify-center gap-4 mt-2">
        <p className="text-white font-bold text-4xl">Quem somos</p>
        <div className="texto-introdutorio text-base text-gray-700 text-center bg-blue-100 p-4 rounded shadow-md">
          <p className="text-justify max-w-[750px]">
            Bem-vindo(a) à Mais Saúde, a plataforma que une tecnologia e saúde
            para promover o bem-estar psicossocial e contribuir para a
            realização da ODS número 3 da ONU: assegurar uma vida saudável e
            promover o bem-estar para todos, em todas as idades. Na busca por
            alcançar o acesso à saúde de qualidade, identificamos a necessidade
            urgente de disseminar conhecimento sobre bem-estar psicossocial.
            Para concretizar essa missão, criamos uma rede social inovadora,
            conectando cidadãos comuns a profissionais da saúde por meio de
            fóruns, postagens e conversas construtivas. Junte-se a nós na
            jornada em direção a uma vida mais saudável e equilibrada. Mais
            Saúde está aqui para ser sua plataforma de apoio e conhecimento.
            Vamos construir, aprender e prosperar juntos!
          </p>
        </div>
        <h1 className="text-white font-bold text-4xl mb-4">Desenvolvedores</h1>
        <div className="flex flex-col lg:grid lg:grid-cols-2">
          {membros.map((membro) => (
            <MembroComponent key={membro.nome} membro={membro} />
          ))}
        </div>
        <a href="/" className="bg-blue-600 my-6 rounded-md py-2 px-4 font-bold text-white shadow-lg hover:scale-105">
          Voltar a página principal
        </a>
      </div>
    </section>
  );
};

export default Sobre;
