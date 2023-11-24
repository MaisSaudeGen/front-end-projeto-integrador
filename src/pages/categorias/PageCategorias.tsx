import { useState } from "react";
import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias";
import Modal from "../../components/Modal";
import FormCriarCategoria from "../../components/categorias/FormCriarCategoria";
import BarraPesquisa from "../../components/BarraPesquisa/BarraPesquisa";
import { RecarregarPaginaProvider } from "../../contexts/recarregarPagina";
import { CategoriaPesquisadaProvider } from "../../contexts/CategoriasPesquisadas/categoriasPesquisadas";
import Botao from "../../components/BotãoVoltarCategoria";

export default function PageCategorias() {
  const [open, setOpen] = useState(false);
  //Criar um botão de voltar quando usuario pesquisar algo?
  return (
    <CategoriaPesquisadaProvider>
      <section className="mt-20 flex flex-col sm:flex-row py-6 gap-4 items-center justify-center bg-black bg-opacity-30">
        <button
          onClick={() => setOpen(!open)}
          className="text-white border p-4 px-[5rem] rounded-md shadow-md bg-black bg-opacity-40 hover:bg-blue-400"
         >
          Criar nova categoria
        </button>
        <BarraPesquisa />
        <Botao texto="Voltar" className={""} />
      </section>
      <section className="flex flex-col items-center justify-center grow">
        <RecarregarPaginaProvider>
          <Modal
            isOpen={open}
            titulo="Criar Categoria"
            descricao="Preencha os campos abaixo para criar uma nova categoria."
            >
            <FormCriarCategoria setOpen={setOpen} />
          </Modal>
          <ListaCategorias />
        </RecarregarPaginaProvider>
      </section>
    </CategoriaPesquisadaProvider>
  );
}
