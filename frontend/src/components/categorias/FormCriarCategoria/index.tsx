import { ChangeEvent, useState } from "react";
import { criarCategoria } from "../../../services/categoriasService";
import { AxiosError } from "axios";
import toastAlert from "../../../utils/toastAlert";
import { useNavigate } from "react-router-dom";
import { useRecarregarPagina } from "../../../contexts/recarregarPagina/useRecarregarPagina";

export interface CriarCategoria {
  nome: string;
  descricao: string;
}

interface Props {
  setOpen: (isOpen: boolean) => void;
}

export default function FormCriarCategoria({ setOpen }: Props) {
  const [categoria, setCategoria] = useState<CriarCategoria>({
    nome: "",
    descricao: "",
  });
  const { recarregar, setRecarregar } = useRecarregarPagina();
  const navigate = useNavigate();

  async function cadastrarCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    //Todo: Criar validações de formulário.

    const resposta = await criarCategoria(categoria);

    if (resposta instanceof AxiosError) {
      toastAlert(
        "Não foi possível criar a categoria: " + resposta.message,
        "erro"
      );
      if (resposta.message.includes("401")) {
        navigate("/login");
      }
    }
    toastAlert("Categoria criado com sucesso!", "sucesso");
    setOpen(false);
    setRecarregar(!recarregar);
    console.log({ email, senha: "protected" });
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          cadastrarCategoria(e);
        }}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div className="flex flex-col">
          <label className="text-white" htmlFor="">
            Nome:
          </label>
          <input
            required
            id="Nome"
            name="nome"
            value={categoria.nome}
            onChange={(e) => {
              atualizarEstado(e);
            }}
            className="rounded-md pl-1 focus:outline-none focus:ring"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-white" htmlFor="">
            Descricao:
          </label>
          <input
            required
            id="Descricao"
            name="descricao"
            value={categoria.descricao}
            onChange={(e) => {
              atualizarEstado(e);
            }}
            className="rounded-md pl-1 focus:outline-none focus:ring"
            type="text"
          />
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
