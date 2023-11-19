import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ConfirmModal } from "../../ConfirmModal/ConfirmModal";
import { useState } from "react";
import { excluirCategoria } from "../../../services/categoriasService";
import Categorias from "../../../model/Categorias";

function CardCategorias({ id, nome, descricao }: Categorias) {
  const [modalExcluir, setModalExcluir] = useState(false);
  const [deletado, setDeletado] = useState(false);

  async function editar() {
    console.log('Não implementado')
  }

  async function excluir() {
    setDeletado(true);
    const response = await excluirCategoria(id);
    console.log(response);
  }

  return (
    <div
      className={`flex flex-col rounded-2xl overflow-hidden justify-between shadow-xl 
    ${deletado && "hidden"}
    `}
    >
      <h2 className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        {nome || <Skeleton className="cursor-wait" height={20} width={100} />}
      </h2>
      <p className="p-4 text-xl bg-slate-200 h-full min-h-[125px]">
        {descricao ||
          Array(3)
            .fill("")
            .map((_, index) => (
              <Skeleton className="cursor-wait" key={index} height={20} />
            ))}
      </p>

      <div className="flex">
        {nome ? (
          <>
            <button
              onClick={editar}
              className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2"
            >
              Editar
            </button>

            <button
              onClick={() => {setModalExcluir(true)}}
              className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center"
            >
              Deletar
            </button>
          </>
        ) : (
          <>
            <div className="cursor-wait bg-indigo-400 w-full flex items-center justify-center h-[40px]">
              <Skeleton width={60} height={12} />
            </div>
            <div className="cursor-wait bg-red-400 w-full flex items-center justify-center h-[40px]">
              <Skeleton width={60} height={12} />
            </div>
          </>
        )}
      </div>
      <ConfirmModal
        isOpen={modalExcluir}
        mostrarModal={setModalExcluir}
        onConfirm={excluir}
        tituloCard={nome}
        mensagem={"Você deseja mesmo excluir?"}
      />
    </div>
  );
}

export default CardCategorias;
