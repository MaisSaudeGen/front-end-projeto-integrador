import ColunaLateral from "../../components/ColunaLateral/ColunaLateral";
import CriarPost from "../../components/CriarPost/CriarPost";
import { RecarregarPaginaProvider } from "../../contexts/recarregarPagina";

import ListaDePostagem from "../../components/ListaDePostagem/ListaDePostagem";

export default function PagePostagens() {
  return (
    <RecarregarPaginaProvider>
      <section className="flex flex-grow ">
        <ColunaLateral />
        <div className="py-4 flex ml-[5rem] grow flex-col items-center gap-6">
          <CriarPost />
          <ListaDePostagem />
        </div>
      </section>
    </RecarregarPaginaProvider>
  );
}
