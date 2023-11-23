import { useState } from "react";
import userImg from "../../assets/images/default/user.svg";
import Modal from "../Modal";
import FormCriarPost from "../FormCriarPost/FormCriarPost";

export default function CriarPost() {
  const [mostrar, setMostrar] = useState(false);
  
  return (
    <>
      <div className="bg-black bg-opacity-30 text-white p-8 rounded-md sm:w-[70%] xl:w-[850px] 2xl:w-[850px]">
        <div className="flex justify-center items-center gap-2">
          <img src={userImg} alt="Sua imagem de perfil" />
          <button
            onClick={() => setMostrar(true)}
            className="bg-white rounded-full text-zinc-400 px-10 py-5"
            >
            Crie um novo post
          </button>
        </div>
      </div>

      <Modal 
        isOpen={mostrar} 
        descricao={"Preencha os campos abaixo"} 
        titulo={"Criar Post"} 
        >
        <FormCriarPost setOpen={setMostrar}/>
      </Modal>
    </>
  );
}
