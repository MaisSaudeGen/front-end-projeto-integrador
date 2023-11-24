import { useEffect, useState } from "react";
import { buscarPosts } from "../../services/postagemService";
import Postagem from "../../model/Postagem";
import CardPostagem from "../CardPostagem/CardPostagem";
import { useRecarregarPagina } from "../../contexts/recarregarPagina/useRecarregarPagina";
import Categorias from "../../model/Categorias";
import Usuario from "../../model/Usuario";
import { useCategoriasPesquisadas } from "../../contexts/CategoriasPesquisadas/useCategoriasPesquisadas";

export default function ListaDePostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const { recarregar } = useRecarregarPagina();
  const { setCategoriasPesquisadas, categoriasPesquisadas } = useCategoriasPesquisadas();

  console.log("hook:", categoriasPesquisadas);

  useEffect(() => {
    async function fetchData() {
      const data = await buscarPosts();
      setPosts(data);
      console.log(data);
    }
    fetchData();
  }, [recarregar]);

  function limparFiltro(){
    setCategoriasPesquisadas([])
  }

  return (
    <>
      {posts.length == 0 &&
        Array(6)
          .fill("")
          .map((_, index) => (
            <CardPostagem
              key={index}
              id={0}
              texto={""}
              data={""}
              titulo={""}
              corpo={""}
              likes={0}
              compartilhamentos={0}
              comentarios={""}
              categorias={{} as Categorias}
              usuario={{} as Usuario}
            />
          ))}

      {categoriasPesquisadas && categoriasPesquisadas.length > 0
        ? (() => {
            const filteredPosts = posts.filter(
              (post) => post.categorias.nome === categoriasPesquisadas[0].nome
            );
            if (filteredPosts.length > 0) {
              return filteredPosts.map((post) => (
                <CardPostagem key={post.id} {...post} />
              ));
            } else {
              return (
                <>
                  <button 
                    onClick={() => limparFiltro()}
                    className="text-white font-bold text-2xl border rounded-md p-4 bg-black bg-opacity-50">
                    Limpar Filtro
                  </button>
                  <div className="flex flex-col items-center bg-black w-full bg-opacity-30 py-10 rounded-md">
                    <span className="text-white text-3xl">
                      Não há nada para exibir.
                    </span>
                    <span className="text-white text-xl">
                      Tente pesquisar por outro tema
                    </span>
                  </div>
                </>
              );
            }
          })()
        : posts.map((post) => <CardPostagem key={post.id} {...post} />)}
    </>
  );
}
