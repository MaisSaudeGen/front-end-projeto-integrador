import member1Imagem from "../../assets/images/sobre/Beatriz.jpeg";
import member2Imagem from "../../assets/images/sobre/Elias.jpeg";
import member3Imagem from "../../assets/images/sobre/Stephanny.jpeg";
import member4Imagem from "../../assets/images/sobre/R.png";



export default function Sobre() {
  return (
    <main className="flex grow bg-cyan-800">
      <div className="flex justify-center items-center py-8 px-10">
        <div className="w-1/3 mr-4 flex flex-col items-center">
          <div className="pb-6">
            <h1 className="text-3xl font-bold text-white text-center">Quem Somos</h1>
          </div>

          <p className="text-xl text-white text-justify">
            Bem-vindo(a) à Mais Saúde, a plataforma que une tecnologia e saúde para promover o bem-estar psicossocial e contribuir para a realização
            da ODS número 3 da ONU: assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.
            Na busca por alcançar o acesso à saúde de qualidade, identificamos a necessidade urgente de disseminar conhecimento
            sobre bem-estar psicossocial. Para concretizar essa missão, criamos uma rede social inovadora, conectando cidadãos
            comuns a profissionais da saúde por meio de fóruns, postagens e conversas construtivas.
            Junte-se a nós na jornada em direção a uma vida mais saudável e equilibrada. Mais Saúde está aqui para ser sua plataforma de apoio e conhecimento. Vamos construir, aprender e prosperar juntos!
          </p>
        </div>

        
        <div className="w-full mb-4">
          <h2 className="text-2xl font-bold text-white text-center mb-4">Desenvolvedores</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
          <div className="rounded-lg overflow-hidden bg-white shadow-md">
              <h2 className="text-xl font-bold text-center mb-3">Beatriz</h2>
              <div className="rounded-full overflow-hidden">
              <img src={member1Imagem} alt="Beatriz - Foto do Membro 1" className="rounded-full mx-auto mb-3 w-24 h-24 object-cover" /> 
            </div>
            </div>

            <div className="rounded-lg overflow-hidden bg-white shadow-md">
              <h2 className="text-xl font-bold text-center mb-3">Elias</h2>
              <img src={member2Imagem} alt="Elias - Foto do Membro 2" className="rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
            </div>

            <div className="rounded-lg overflow-hidden bg-white shadow-md">
              <h2 className="text-xl font-bold text-center mb-3">Stephanny</h2>
              <img src={member3Imagem} alt="Stephanny - Foto do Membro 3" className="rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
            </div>
            {/* Adicione mais membros conforme necessário */}
            <div className="rounded-lg overflow-hidden bg-white shadow-md">
              <h2 className="text-xl font-bold text-center mb-3">Mayara</h2>
              <img src={member4Imagem} alt="Stephanny - Foto do Membro 3" className="rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-white shadow-md">
              <h2 className="text-xl font-bold text-center mb-3">Matheus</h2>
              <img src={member4Imagem} alt="Stephanny - Foto do Membro 3" className="rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-white shadow-md">
              <h2 className="text-xl font-bold text-center mb-3">Filipi</h2>
              <img src={member4Imagem} alt="Stephanny - Foto do Membro 3" className="rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
            </div>
            <div className="rounded-lg overflow-hidden bg-white shadow-md">
              <h2 className="text-xl font-bold text-center mb-3">Thamires</h2>
              <img src={member4Imagem} alt="Stephanny - Foto do Membro 3" className="rounded-full mx-auto mb-3 w-24 h-24 object-cover" />
            </div>
        </div>
        </div>
      </div>
    </main>
  );
}

