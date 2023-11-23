import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRecarregarPagina } from "../../contexts/recarregarPagina/useRecarregarPagina";
import { useNavigate } from "react-router-dom";
import toastAlert from "../../utils/toastAlert";
import { useUserInfo } from "../../contexts/UserContex/useUserInfo";
import { AxiosError } from "axios";
import { criarPost } from "../../services/postagemService";
import Categorias from "../../model/Categorias";
import { pegarCategorias } from "../../services/categoriasService";
import { buscarUsuarios } from "../../services/UsuarioService";
import { useAuth } from "../../contexts/authProvider/useAuth";

interface Props {
  setOpen: (isOpen: boolean) => void;
}

export interface CriarPost {
  texto: string;
  data: string; //2023-11-21T11:51:41.815Z,
  titulo: string; //string padrão
  corpo: string;
  categorias: {
    id: number;
  };
  usuario: {
    id: number;
  };
}

export default function FormCriarPost({ setOpen }: Props) {
  const { recarregar, setRecarregar } = useRecarregarPagina();
  const navigate = useNavigate();
  const authUser = useAuth()
  const { user, setUser } = useUserInfo();
  const [categorias, setCategorias] = useState<Categorias[]>([]);
  

  useEffect(() => {
    async function fecthDataThemes() {
      const response = await pegarCategorias();

      if (response instanceof AxiosError) {
        toastAlert("Erro ao buscar temas " + response, "error", 10000);
        setOpen(false);
        return;
      }
      console.log(response);
      setCategorias(response);
    }
    fecthDataThemes();
  }, []);

  useEffect(() => {
    async function carregarUsuario() {
      const usuarios = await buscarUsuarios()
  
      if( usuarios === null){
        return "Erro ao buscar usuários, por favor faça login novamente."
      }
  
      if( usuarios instanceof Array) {
        const usuarioEncontrado = usuarios.find(usuario => usuario.usuario === authUser.user.email)
        console.log("Usuario encontrado useEffect: ", usuarioEncontrado)
        if(usuarioEncontrado){
          setUser(usuarioEncontrado)
          return usuarioEncontrado
        } else {
          throw Error("Usuário não entrado. Faça login de novo!")
          navigate('/login')
        }
      }
    }
    console.log("USE EFECT CHAMADO valor de user: ", user)

    if(Object.keys(user).length === 0){
      console.log("Usuário perdido, buscando info do usuario.")
      // Buscar todos usuários do back e filtrar para achar o que tem email igual.
      carregarUsuario()
    }

  }, [])


  const [post, setPost] = useState<CriarPost>({
    texto: "", //MIN DE 10 CARACTERES
    data: new Date().toISOString(), //2023-11-21T11:51:41.815Z,
    titulo: "",
    corpo: "null",
    categorias: {
      id: 0,
    },
    usuario: {
      id: user.id ,
    },
  });
  

  function validacoes(){
    if (post.categorias.id == 0) {
      toastAlert("Escolha o tema antes de enviar", "info", 3000);
      return false;
    }

    if (!validaTexto(post.texto)) {
      toastAlert("Verifique as regras de cadastro e tente de novo", "info", 3000);
      return false;
    } 

    if (post.usuario.id === undefined) {
      console.log("Usuario id é undefined, buscando valor de novo.")
      // tentar recarregar o valor de usuário.
      setPost(prevPost => ({ ...prevPost, usuario: { id: user.id } }));
      console.log("novo valor: ", user.id, post.usuario.id)
      toastAlert("Por favor, tente novamente!", "info", 3000)
      return false
    }

    return true
  }

  async function cadastrarPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();


    if (!validacoes()){
      return //interrompendo o fluxo
    }

    console.log("enviado para a api", post);
    
    const resposta = await criarPost(post);

    if (resposta instanceof AxiosError) {
      toastAlert("Não foi possível criar a post: " + resposta.message, "erro");
      if (resposta.message.includes("401")) {
        navigate("/login");
      }
    }
    toastAlert("post criado com sucesso!", "sucesso");
    setOpen(false);
    setRecarregar(!recarregar);
  }

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

  function validaTexto(texto: string) {
    return texto.length >= 10;
  }

  return (
    <div>
      <form
        onSubmit={(e) => cadastrarPost(e)}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div className="flex flex-col">
          <label className="text-white" htmlFor="">
            Titulo:
          </label>
          <input
            required
            id="titulo"
            name="titulo"
            value={post.titulo}
            onChange={(e) => {
              atualizarEstado(e);
            }}
            className="rounded-md pl-1 focus:outline-none focus:ring"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full break-words ">
          <label className="text-white" htmlFor="">
            Texto:
          </label>
          <textarea
            required
            rows={4}
            id="texto"
            name="texto"
            value={post.texto}
            onChange={(e) => {
              atualizarEstado(e);
            }}
            className="rounded-md resize-none focus:outline-none focus:ring"
          />
          {!validaTexto(post.texto) && post.texto && (
            <>
              <span className="text-red-500 pt-1">Digite ao menos 10</span>
              <span className="text-red-500">caracteceres para o titulo</span>
            </>
          )}
        </div>
        <div className="flex flex-col w-full ">
          <label className="text-white" htmlFor="">
            Selecione o tema:
          </label>
          <select
            onChange={(e) =>
              setPost({ ...post, categorias: { id: parseInt(e.target.value) } })
            }
            className="bg-transparent border rounded-md p-1 mt-2 text-white"
            name="categorias"
            id="categoriaId"
            
          >
            <option 
              className="bg-zinc-600 text-white" 
              selected
              disabled
              value=""
              >
              Escolha uma categoria
            </option>
            {categorias?.map((categoria) => (
              <option
                className="bg-zinc-600 text-white"
                key={categoria.id}
                value={categoria.id}
              >
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-4 ">
          <button
            type="submit"
            className="px-10 py-2 my-2 text-white bg-green-500 border rounded-md"
          >
            Criar
          </button>
          <button
            onClick={() => setOpen(false)}
            className="px-10 py-2 my-2 text-white bg-red-600 border rounded-md"
          >
            Sair
          </button>
        </div>
      </form>
    </div>
  );
}
