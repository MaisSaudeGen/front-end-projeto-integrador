import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usuario from "../../../model/Usuario";
import { useAuth } from "../../../contexts/authProvider/useAuth";
import fotoPadrao from "../../../assets/images/default/user.svg";
import fundoPadrao from "../../../assets/images/Usuario/fundoPadraoUsuario.png";
import { editarUsuario } from "../../../services/UsuarioService";

interface Props {
  usuario: Usuario;
}
export default function CardUsuario({ usuario }: Props) {
  const [editado, setEditado] = useState(false);
  const [usuarioEditado, setUsuarioEditado] = useState<Usuario>({ ...usuario });
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (auth.user.token === "") {
      alert("Você precisa estar logado");
      navigate("/login");
    }
  }, [auth.user.token]);

  async function handleEdit() {
    setEditado(!editado);
    //chamar o back
    console.log(usuarioEditado)
    const resposta = await editarUsuario(usuarioEditado)
    console.log(resposta)

  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioEditado({ ...usuarioEditado, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className="container mx-auto mt-4 rounded-2xl overflow-hidden">
        <img
          className="w-full h-72 object-cover border-b-8 border-white"
          src={fundoPadrao}
          alt="Capa do Perfil"
        />

        <img
          className="rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10"
          src={usuario.foto || fotoPadrao}
          alt={`Foto de perfil de ${usuario.nome}`}
        />

        <div
          className="relative mt-[-6rem] h-72 flex flex-col pt-8 gap-2 
                    bg-sky-500 text-white text-2xl items-center justify-center"
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu nome aqui"
            className={`focus:outline-none border-b ${!editado && "border-transparent"} ${editado && "border-b rounded-none focus:bg-black focus:bg-opacity-50"}  rounded-md pl-1 bg-transparent placeholder-white`}
            readOnly={!editado}
            value={usuarioEditado.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <input
            type="text"
            name="usuario"
            placeholder="Seu email aqui"
            className={`focus:outline-none border-b ${!editado && "border-transparent"} ${editado && "border-b rounded-none focus:bg-black focus:bg-opacity-50"}  rounded-md pl-1 bg-transparent placeholder-white`}
            readOnly={!editado}
            value={usuarioEditado.usuario}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
          <input
            type="text"
            name="foto"
            placeholder="url da sua foto aqui"
            className={`focus:outline-none border-b ${!editado && "border-transparent"} ${editado && "border-b rounded-none focus:bg-black focus:bg-opacity-50"}  rounded-md pl-1 bg-transparent placeholder-white`}
            readOnly={!editado}
            value={usuarioEditado.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex">
          <button
            onClick={() => handleEdit()}
            className="w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2"
          >
            {editado? "Salvar" : "Editar"}
          </button>

          <button
            className="text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center"
          >
            Excluir
          </button>
        </div>
      </div>
      {/* <Modal 
      isOpen={ediatado} 
      titulo={"Editar perfil"} 
      descricao={"Preencha os campos abaixo"} 
      >
        <FormEditarUsuario/>
      </Modal> */}
    </>
  );
}
