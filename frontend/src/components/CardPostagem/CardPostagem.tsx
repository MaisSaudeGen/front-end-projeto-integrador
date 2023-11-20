import { useState } from "react";
import userImg from "../../assets/images/default/user.svg";
import defaultLike from "../../assets/images/like/defaultLike.svg";
import liked from "../../assets/images/like/liked.svg";
import comentarioImg from "../../assets/images/comentario/coment.svg";

export default function CardPostagem() {
  const [expanded, setExpanded] = useState(false);
  const [curtida, setCurtida] = useState(false);
  const placeHolderCorpoPost =
    "A ortopedia desempenha um papel fundamental na promoção da saúde ao concentrar-se no sistema musculoesquelético, responsável pela sustentação e movimentação do corpo humano. Esta especialidade médica dedica-se ao diagnóstico, tratamento e prevenção de condições que afetam os ossos, articulações, músculos, ligamentos e tendões. Ao abordar questões como fraturas, lesões esportivas, deformidades congênitas e doenças degenerativas, a ortopedia visa restaurar a funcionalidade e a qualidade de vida dos pacientes. Além disso, desempenha um papel crucial na reabilitação pós-cirúrgica, orientando a fisioterapia e promovendo a recuperação eficiente. Com sua abordagem abrangente, a ortopedia desempenha um papel essencial na manutenção da saúde, contribuindo para a mobilidade e bem-estar global dos indivíduos.";
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  function handleLike() {
    setCurtida(!curtida);
  }
  return (
    <section className="flex flex-col bg-black bg-opacity-40 rounded-md max-w-[70%] p-4 gap-4">
      <div
        id="cabecalhoPost"
        className="flex items-center border-b border-zinc-300 pb-2"
      >
        <img src={userImg} alt="" />
        <ul>
          <li>
            <p className="text-white">Paulo Muzy</p>
          </li>
          <li>
            <p className="text-white">Categoria da postagem</p>
          </li>
          <li>
            <p className="text-white">33 min</p>
          </li>
        </ul>
      </div>
      <div id="CorpoDoPost">
        <span className="text-white">
          {expanded ? placeHolderCorpoPost : placeHolderCorpoPost.slice(0, 200)}
        </span>
        <button
          onClick={handleToggleExpand}
          className="text-zinc-300 underline pl-2"
        >
          {expanded ? "ver menos" : "...ver mais"}
        </button>
      </div>
      <div id="ImagemDoPost">
        <img
          src="https://clinicahumanamt.com.br/wp-content/uploads/2021/04/M%C3%A9dico-ortopedista-scaled.jpg"
          alt=""
        />
      </div>
      <div
        id="Engajamento"
        className="flex items-center justify-around border-b border-zinc-300 pb-2"
      >
        <div className="flex items-center gap-1">
          <button onClick={handleLike}>
            <img src={curtida ? liked : defaultLike} alt="" />
          </button>
          <span className="text-white">5 curtidas</span>
        </div>
        <div className="flex items-center gap-1">
          <img src={comentarioImg} alt="" />
          <span className="text-white">3 comentários</span>
        </div>
      </div>
      <div id="Cometar" className="flex gap-2">
        <img src={userImg} width="40px" alt="" />
        <input 
        type="text" 
        placeholder="Adicionar comentário"
        className="rounded-full w-full pl-2" />
      </div>
    </section>
  );
}
