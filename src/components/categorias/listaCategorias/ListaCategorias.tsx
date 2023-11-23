import { useEffect, useState } from "react";
import { pegarCategorias } from "../../../services/categoriasService";
import CardCategorias from "../cardCategorias/CardCategorias";
import toastAlert from "../../../utils/toastAlert";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import Categorias from "../../../model/Categorias";
import { useRecarregarPagina } from "../../../contexts/recarregarPagina/useRecarregarPagina";
import { useCategoriasPesquisadas } from "../../../contexts/CategoriasPesquisadas/useCategoriasPesquisadas";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  //Trasnformar em um contexto loading parar usar em toda a pagina
  const [isLoading, setIsLoading] = useState(true);
  const { recarregar } = useRecarregarPagina();
  const { categoriasPesquisadas } =
  useCategoriasPesquisadas();

  const navigate = useNavigate();

  useEffect(() => {
    buscarCategorias();
  }, [recarregar]);

  async function buscarCategorias() {
    const resposta = await pegarCategorias();

    console.log(resposta);

    if (resposta instanceof AxiosError) {
      if (resposta?.message.includes("401") || resposta?.message.includes("403")) {
        toastAlert("Você precisa logar para ver esse conteúdo", "info");
        navigate("/login");
      }
    }

    setCategorias(resposta);
    setIsLoading(false);
  }

  return (
    <div className="container flex flex-col">
      <div className="flex flex-wrap justify-center items-center gap-8 p-8">
        {isLoading &&
          Array(6)
            .fill("")
            .map((_, index) => (
              <CardCategorias key={index} nome={""} descricao={""} id={0} />
            ))}
        {
          categoriasPesquisadas.length > 0 ?
          categoriasPesquisadas.map((categoria) => {
            return <CardCategorias key={categoria.id} {...categoria} />;
          })
          :
          categorias.map((categoria) => {
            return <CardCategorias key={categoria.id} {...categoria} />;
          })
        }
      </div>
    </div>
  );
}

export default ListaCategorias;
