import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ConfirmModal } from "../../ConfirmModal/ConfirmModal";
import { ChangeEvent, useState } from "react";
import { editarCategoria, excluirCategoria } from "../../../services/categoriasService";
import Categorias from "../../../model/Categorias";

function CardCategorias({ id, nome, descricao }: Categorias) {
  const [categoria, setCategoria] = useState<Categorias>({
    id: id,
    nome: nome,
    descricao: descricao,
  });
  const [modalExcluir, setModalExcluir] = useState(false);
  const [deletado, setDeletado] = useState(false);
  const [editado, setEditado] = useState(false);

  async function salvarEdicao() {
    setEditado(!editado);
    const resultado = await editarCategoria(categoria)
    console.log(resultado)
  }

  async function excluir() {
    setDeletado(true);
    const response = await excluirCategoria(id);
    console.log(response);
  }

  function recarregarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

  return (
    <div
      className={`flex flex-col rounded-2xl 
      w-[100%] md:w-[80%] lg:w-[40%]
      justify-between shadow-2xl overflow-hidden
      hover:scale-105 duration-300
    ${deletado && "hidden"}
    `}
    >
      {editado ? (
        <textarea
          id="NomeDaCategoria"
          className={`
          py-2 px-4 bg-black bg-opacity-60 text-white font-bold text-2xl
          border-2 rounded-t-2xl outline-white 
          focus:bg-opacity-70 resize-none 
          
          `}
          rows={4}
          name="nome"
          value={categoria.nome}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            recarregarEstado(e);
          }}
        />
      ) : (
        <p className="py-2 px-4 rounded-t-md bg-black bg-opacity-50 text-white font-bold text-2xl ">
          {categoria.nome || (
            <Skeleton className="cursor-wait" height={20} width={150} />
          )}
        </p>
      )}
      {editado ? (
        <textarea
          className="p-4 text-xl text-white bg-green-600 bg-opacity-80 h-full 
         outline-white border-2 resize-none "
          rows={4}
          name="descricao"
          value={categoria.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
             recarregarEstado(e)
          }}
        />
      ) : (
        <p className="p-4 text-xl text-white bg-black bg-opacity-30 h-full min-h-[125px]">
          {categoria.descricao ||
            Array(3)
              .fill("")
              .map((_, index) => (
                <Skeleton className="cursor-wait" key={index} height={20} />
              ))}
        </p>
      )}

      <div id="BotoesCardCategorias"className="bg-black bg-opacity-30 py-2">
        {categoria.nome ? (
          <div className="flex justify-center items-center gap-8">
            <button
              onClick={ () =>{
                editado? salvarEdicao() : setEditado(true)
              }
              }
              className="text-white bg-indigo-700 hover:bg-indigo-600 
                          py-2 px-8 rounded-full"
            >
              
              {editado? "Salvar" : "Editar"}
            </button>

            <button
              onClick={() => {
                editado ? setEditado(false) : setModalExcluir(true);
              }}
              className="text-white bg-red-700 hover:bg-red-600 
              py-2 px-8 rounded-full"
            >
              {editado? "Cancelar" : "Excluir"}
            </button>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-8">
            <div
              className="cursor-wait text-white bg-indigo-700 hover:bg-indigo-600 
                          py-2 px-8 rounded-full"
            >
              <Skeleton width={60} height={12} />
            </div>
            <div
              className="cursor-wait text-white bg-red-700 hover:bg-red-600 
              py-2 px-8 rounded-full"
            >
              <Skeleton width={60} height={12} />
            </div>
          </div>
        )}
      </div>
      <ConfirmModal
        isOpen={modalExcluir}
        mostrarModal={setModalExcluir}
        onConfirm={excluir}
        tituloCard={categoria.nome}
        mensagem={"Você deseja mesmo excluir?"}
      />
    </div>
  );
}

export default CardCategorias;
