import { useEffect, useState } from "react";
import { buscarPosts } from "../../services/postagemService";
import Postagem from "../../model/Postagem";
import CardPostagem from "../CardPostagem/CardPostagem";
import { useRecarregarPagina } from "../../contexts/recarregarPagina/useRecarregarPagina";

export default function ListaDePostagem() {
  const [posts, setPosts] = useState<Postagem[]>([]);
  const { recarregar } = useRecarregarPagina();
  useEffect(() => {
    async function fetchData() {
      const data = await buscarPosts();
      setPosts(data);
      console.log(data);
    }
    fetchData();
  }, [recarregar]);
  return (
    <>
      {posts.length == 0 &&
        Array(6)
          .fill("")
          .map((_, index) => (
            <CardPostagem key={index} id={0} texto={""} data={""} titulo={""} corpo={""} likes={0} compartilhamentos={0} comentarios={""} categorias={undefined} usuario={undefined}/>
          ))}
      {posts.map((post) => (
        <CardPostagem key={post.id} {...post} />
      ))}
    </>
  );
}
