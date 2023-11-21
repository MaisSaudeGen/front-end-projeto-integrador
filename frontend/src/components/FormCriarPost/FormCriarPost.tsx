import { useEffect, useState } from "react";
import { useRecarregarPagina } from "../../contexts/recarregarPagina/useRecarregarPagina";
import { useNavigate } from "react-router-dom";
import toastAlert from "../../utils/toastAlert";
import { useUserInfo } from "../../contexts/UserContex/useUserInfo";
import { AxiosError } from "axios";
import { criarPost } from "../../services/postagemService";
import Categorias from "../../model/Categorias";
import { pegarCategorias } from "../../services/categoriasService";

interface Props {
  setOpen: (isOpen: boolean) => void;
}

export interface CriarPost{
  texto: string
  data: string //2023-11-21T11:51:41.815Z,
  titulo: string //string padrão
  corpo: string
  categorias: {
    id: number
  },
  usuario: {
    id: number
  }
}

export default function FormCriarPost({ setOpen }: Props) {
  const { recarregar, setRecarregar } = useRecarregarPagina();
  const navigate = useNavigate();
  const {user} = useUserInfo()
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  const [post, setPost] = useState<CriarPost>({
    texto: "", //MIN DE 10 CARACTERES
    data: new Date().toISOString(), //2023-11-21T11:51:41.815Z,
    titulo: "", 
    corpo: "null",
    categorias: {
      id: 0
    },
    usuario: {
      id: user.id
    }
  });


  async function cadastrarPost(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("enviado para a api",post)

    if(post.categorias.id == 0) {
      toastAlert('Escolha o tema antes de enviar', "info", 3000)
      return
    }

    const resposta = await criarPost(post);

    if (resposta instanceof AxiosError) {
      toastAlert(
        "Não foi possível criar a post: " + resposta.message,
        "erro"
      );
      if (resposta.message.includes("401")) {
        navigate("/login");
      }
    }
    toastAlert("post criado com sucesso!", "sucesso");
    setOpen(false);
    setRecarregar(!recarregar);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }

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
        <div className="flex flex-col w-full ">
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
        </div>
        <div className="flex flex-col w-full ">
          <label className="text-white" htmlFor="">
            Selecione o tema:
          </label>
          <select
            onChange={(e) => setPost({...post, categorias: {"id": e.target.value} })}
            required={true}
            className="bg-transparent border rounded-md p-1 mt-2 text-white"
            name="categorias"
            id="categoriaId"
          >
            {categorias?.map((categoria) => (
              <option className="bg-zinc-600 text-white" key={categoria.id} value={categoria.id}>
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
