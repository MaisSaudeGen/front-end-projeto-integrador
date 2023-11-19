import { useEffect, useState } from "react";
import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias";
import Modal from "../../components/Modal";
import FormCriarCategoria from "../../components/categorias/FormCriarCategoria";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";
import { RecarregarPaginaProvider } from "../../contexts/recarregarPagina";

export default function PageCategorias() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="flex py-6 gap-4 items-center justify-center bg-black bg-opacity-30">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className=" text-white border p-4 rounded-md shadow-md
              bg-black bg-opacity-40
            hover:bg-blue-400"
        >
          Criar nova categoria
        </button>
        <BarraPesquisa />
      </section>
      <section className="flex flex-col items-center justify-center grow">
        <RecarregarPaginaProvider>
          <div className="flex justify-center w-full">
            <Modal
              isOpen={open}
              setOpen={setOpen}
              titulo="Criar Categoria"
              descricao=""
            >
              <FormCriarCategoria setOpen={setOpen} />
            </Modal>
            <ListaCategorias />
          </div>
        </RecarregarPaginaProvider>
      </section>
    </>
  );
}
