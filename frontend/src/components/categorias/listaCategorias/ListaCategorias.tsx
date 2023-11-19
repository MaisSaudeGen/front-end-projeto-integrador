import { useEffect, useState } from "react";
import { pegarCategorias } from "../../../services/categoriasService";
import CardCategorias from "../cardCategorias/CardCategorias";
import toastAlert from "../../../utils/toastAlert";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import Categorias from "../../../model/Categorias";

function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    const resposta = await pegarCategorias();

    console.log(resposta);

    if (resposta instanceof AxiosError) {
      if (resposta?.message.includes("401")) {
        toastAlert("Você precisa logar para ver esse conteúdo", "info");
        navigate("/login");
      }
    }

    setCategorias(resposta);
  }

  return (
    <div className="container flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <>
          {categorias.map((categoria) => {
            return <CardCategorias key={categoria.id} {...categoria} />;
          })}
        </>
      </div>
    </div>
  );
}

export default ListaCategorias;