import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Props {
  nome: string;
  descricao: string;
}

function CardCategorias({ nome, descricao }: Props) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <h2 className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        {nome || <Skeleton height={20} width={100} />}
      </h2>
      <p className="p-8 text-3xl bg-slate-200 h-full">
        {descricao || 
        Array(4).fill('').map((_,index) => (<Skeleton key={index} height={20} />))}
      </p>

      <div className="flex">
        {nome ? (
          <>
            <button
              className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2"
            >
              Editar
            </button>

            <button
              className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center"
            >
              Deletar
            </button>
          </>
        ) : (
          <>
          <div className="bg-indigo-400 w-full flex items-center justify-center h-[40px]">
            <Skeleton width={60} height={12} />
          </div>
          <div className="bg-red-400 w-full flex items-center justify-center h-[40px]">
            <Skeleton width={60} height={12} />
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CardCategorias;
