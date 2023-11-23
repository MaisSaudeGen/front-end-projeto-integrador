import {  ChangeEvent, useState } from "react";
import userImg from "../../assets/images/default/user.svg";
import defaultLike from "../../assets/images/like/defaultLike.svg";
import liked from "../../assets/images/like/liked.svg";
import comentarioImg from "../../assets/images/comentario/coment.svg";
import Postagem from "../../model/Postagem";
import { formatDate } from "../../utils/dateHelper";
import { editarPost, excluirPost } from "../../services/postagemService";
import { ConfirmModal } from "../ConfirmModal/ConfirmModal";
import Skeleton from "react-loading-skeleton";
import Categorias from "../../model/Categorias";

interface UsuarioID {
  id: number
}

export interface EdiarPostagem {
  id: number
  texto: string
  data: string
  titulo:  string
  corpo:  string
  likes: number
  compartilhamentos: number
  comentarios: string
  categorias: Categorias
  usuario: UsuarioID
}

export default function CardPostagem({
  id,
  titulo,
  corpo,
  compartilhamentos,
  data,
  texto,
  likes,
  comentarios,
  usuario,
  categorias,
}: Postagem) {
  const [postagem, setPostagem] = useState<EdiarPostagem>({
    id,
    titulo,
    corpo,
    compartilhamentos,
    data,
    texto,
    likes,
    comentarios,
    usuario,
    categorias,
  });
  const [editado, setEditado] = useState(false);
  const [mostarModal, setMostrarModal] = useState(false);
  const [deletado, setDeletado] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [curtida, setCurtida] = useState(false);
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  async function handleEdit() {
    setEditado(!editado);

    const usuarioId = postagem.usuario.id

    postagem.usuario = {"id" : postagem.usuario.id}

    setPostagem({...postagem, usuario: {id: usuarioId}})

    console.log("Enviado para a API: ", postagem)
    const response = await editarPost(postagem);
    console.log("Response: ", response);
  }

  async function handleDelete() {
    await excluirPost(id);
    setDeletado(true);
  }

  function handleLike() {
    setCurtida(!curtida);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setPostagem({ ...postagem, [e.target.name]: e.target.value });
  }
  return (
    <>
      <section
        className={` ${
          deletado && "hidden"
        } flex flex-col  bg-black bg-opacity-40 rounded-md max-w-[70%] p-4 gap-4
      min-w-[70%]`}
      >
        <div
          id="cabecalhoPost"
          className="flex items-center justify-between border-b border-zinc-300 pb-2 gap-2"
        >
          <div className="flex gap-2">
            <img src={userImg} alt="" />
            {usuario ? (
              <ul>
                <li>
                  <p className="text-white">{usuario?.nome}</p>
                </li>
                <li>
                  <p className="text-white">{categorias?.nome}</p>
                </li>
                <li>
                  <p className="text-white">{data && formatDate(data)}</p>
                </li>
              </ul>
            ) : (
              <div className="flex flex-col">
                <Skeleton className="cursor-wait" height={20} width={100} />
                <Skeleton className="cursor-wait" height={20} width={100} />
                <Skeleton className="cursor-wait" height={20} width={100} />
              </div>
            )}
          </div>
          <div className="flex flex-col p-2 gap-2">
            <button
              className="flex text-white self-center py-1 px-2
          bg-black rounded-md bg-opacity-50"
              onClick={() =>
                editado ? setEditado(!editado) : setMostrarModal(!mostarModal)
              }
            >
              {editado ? "Voltar" : "Excluir"}
            </button>
            <button
              className="flex w-full justify-center text-white self-center py-1 px-2
          bg-black rounded-md bg-opacity-50"
              onClick={() => (editado ? handleEdit() : setEditado(!editado))}
            >
              {editado ? "Salvar" : "Editar"}
            </button>
          </div>
        </div>
        <div id="CorpoDoPost">
          {editado ? (
            <input
              type="text"
              className="w-full bg-green-600 
            text-white font-bold text-xl
            border rounded-md            
            "
              name="titulo"
              onChange={(e) => atualizarEstado(e)}
              value={postagem.titulo}
            />
          ) : (
            <p className="text-white break-words font-bold text-xl">
              {postagem.titulo || (
                <Skeleton className="cursor-wait" height={20} width={250} />
              )}
            </p>
          )}
          {editado ? (
            <textarea
              className="bg-green-600 
            text-white text-lg
            rounded-md border w-full mt-2 resize-none"
              name="texto"
              id="texto"
              rows={8}
              value={postagem.texto}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
            />
          ) : (
            <span className="text-white break-words">
              {postagem.texto ? (
                expanded ? (
                  postagem.texto
                ) : (
                  postagem.texto.slice(0, 200)
                )
              ) : (
                <div className="gap-2">
                  <Skeleton className="cursor-wait" height={20} width={250} />
                  <Skeleton className="cursor-wait" height={20} width={250} />
                </div>
              )}
            </span>
          )}
          {postagem.texto.length > 200 && (
            <button
              onClick={handleToggleExpand}
              className="text-zinc-300 underline pl-2"
            >
              {expanded ? "ver menos" : "...ver mais"}
            </button>
          )}
        </div>
        <div id="ImagemDoPost">
          {/* <img
          src="https://clinicahumanamt.com.br/wp-content/uploads/2021/04/M%C3%A9dico-ortopedista-scaled.jpg"
          alt=""
        /> */}
        </div>
        <div
          id="Engajamento"
          className="flex items-center justify-around border-b border-zinc-300 pb-2"
        >
          <div className="flex items-center gap-1">
            <button onClick={handleLike}>
              <img src={curtida ? liked : defaultLike} alt="" />
            </button>
            <span className="text-white">{likes} curtidas</span>
          </div>
          <div className="flex items-center gap-1">
            <img src={comentarioImg} alt="" />
            <span className="text-white">
              {comentarios?.length} comentários
            </span>
          </div>
        </div>
        <div id="Cometar" className="flex gap-2">
          <img src={userImg} width="40px" alt="" />
          <input
            type="text"
            placeholder="Adicionar comentário"
            className="rounded-full w-full pl-2"
          />
        </div>
      </section>
      <ConfirmModal
        isOpen={mostarModal}
        onConfirm={handleDelete}
        mostrarModal={setMostrarModal}
        mensagem={"Deseja mesmo excluir?"}
        tituloCard={postagem.titulo}
      />
    </>
  );
}
