import ColunaLateral from "../../components/ColunaLateral/ColunaLateral";
import CriarPost from "../../components/CriarPost/CriarPost";
import { RecarregarPaginaProvider } from "../../contexts/recarregarPagina";

import ListaDePostagem from "../../components/ListaDePostagem/ListaDePostagem";
import { CategoriaPesquisadaProvider } from "../../contexts/CategoriasPesquisadas/categoriasPesquisadas";

export default function PagePostagens() {
  return (
    <CategoriaPesquisadaProvider>
      <RecarregarPaginaProvider>
        <section className="flex flex-grow pt-[85px]">
          <ColunaLateral />
          <div className="py-4 flex sm:ml-[5rem] grow flex-col items-center gap-6 px-2 sm:px-0">
            <CriarPost />
            <ListaDePostagem />
          </div>
        </section>
      </RecarregarPaginaProvider>
    </CategoriaPesquisadaProvider>
  );
}
