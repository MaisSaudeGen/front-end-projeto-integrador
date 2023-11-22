import { useNavigate } from "react-router-dom";
import Usuario from "../../model/Usuario";
import { cadastrarUsuario } from "../../services/Services";
import { ChangeEvent, useState } from "react";
import toastAlert from "../../utils/toastAlert";
import { Link } from "react-router-dom";

function Cadastrar() {
  const navigate = useNavigate();
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [verSenha, setVerSenha] = useState(false);
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    email: "",
    foto: "",
  });

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    const condicao = estaValido();

    if (condicao) {
      toastAlert("Carregando...", "info" ,5000)
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        toastAlert("Usuário cadastrado com sucesso", "sucesso");
        navigate("/login");
      } catch (error) {
        toastAlert("Erro ao cadastrar o Usuário", "error");
      }
    } else {
      toastAlert(
        "Dados inconsistentes. Verifique as informações de cadastro.",
        "error"
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
  }

  function estaValido() {
    if (
      validaSenha(usuario.senha).length == 0 &&
      validaConfimarSenha(confirmaSenha).length == 0 &&
      validaEmail(usuario.usuario).length == 0 &&
      validaNome(usuario.nome).length == 0
    ) {
      return true;
    }
    return false;
  }

  function validaNome(nome: string) {
    const result = [];

    if (nome.includes(" ")) {
      result.push("nome não pode conter espaços");
    }
    if (!isNaN(parseFloat(nome))) {
      result.push("Não pode conter apenas numeros");
    }
    return result;
  }


  function validaEmail(email: string) {
    const result = [];

    if (email.includes(" ")) {
      result.push("Email não pode conter espaços");
    }
    if (email && !email.includes("@")) {
      result.push("Email deve conter '@'");
    }
    if (email && !email.includes(".")) {
      result.push("Email deve conter '.'");
    }
    if (!isNaN(parseFloat(email))) {
      result.push("Não pode conter apenas numeros");
    }
    return result;
  }

  function validaSenha(senha: string) {
    const result = [];

    if (senha.length > 0 && senha.length < 8) {
      result.push("Digite no mínimo 8 caracteres.");
    }
    return result;
  }

  function validaConfimarSenha(senha: string) {
    const result = [];

    if (senha !== usuario.senha) {
      result.push("As senhas não coincidem");
    }
    return result;
  }

  return (
    <div
      className="flex grow justify-center items-center
        bg-gradient-to-r from-secundario-3 to-principal-3 "
    >
      <div className="flex justify-center rounded-md bg-black bg-opacity-30 shadow-2xl">
        <form
          onSubmit={cadastrarNovoUsuario}
          className="flex 
          flex-col justify-center items-center p-10 rounded-lg drop-shadow-lg gap-2"
        >
          <h2 className="text-4xl font-bold text-bold text-white ">
            Cadastrar
          </h2>
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome aqui"
              className="
                rounded-md p-1 text-lg text-black
                focus:scale-[1.02]
                focus:shadow-2xl
                focus:outline-none"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            ></input>
            {usuario.nome.includes(" ") && (
              <span className="text-red-500 font-bold pt-1">
                Nome não pode conter espaços
              </span>
            )}
            {!(usuario.nome.length === 0) && usuario.nome.length < 3 && (
              <span className="text-red-500 font-bold pt-1">
                Nome deve ter no mínimo 3 caracteres
              </span>
            )}
            {!isNaN(parseFloat(usuario.nome)) && (
              <span className="text-red-500 font-bold pt-1">
                Não pode conter apenas numeros
              </span>
            )}
          </div>
          <div className="flex flex-col ">
            <label className="text-white text-lg" htmlFor="usuario">
              Email
            </label>
            <input
              type="email"
              id="usuario"
              name="usuario"
              placeholder="voce@exemplo.com"
              className="
                rounded-md p-1 text-lg text-black
                focus:scale-[1.02]
                focus:shadow-2xl
                focus:outline-none"
              value={usuario.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            ></input>
            {validaEmail(usuario.usuario).map((mensagem) => {
              return (
                <span className="text-red-500 text-center pt-1">
                  {mensagem}
                </span>
              );
            })}
          </div>
          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="senha">
              Senha
            </label>
            <input
              type={verSenha ? "text" : "password"}
              id="senha"
              name="senha"
              placeholder="Digite 8 caracteres ou mais"
              className="
                rounded-md p-1 text-lg text-black
                focus:scale-[1.02]
                focus:shadow-2xl
                focus:outline-none"
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            ></input>
            {validaSenha(usuario.senha).map((mensagem) => {
              return (
                <span className="text-red-500 text-center pt-1">
                  {mensagem}
                </span>
              );
            })}
          </div>

          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="confirmarSenha">
              Confirmar Senha
            </label>
            <input
              type={verSenha ? "text" : "password"}
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Digite 8 caracteres ou mais"
              className="
                rounded-md p-1 text-lg text-black
                focus:scale-[1.02]
                focus:shadow-2xl
                focus:outline-none"
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleConfirmarSenha(e)
              }
            ></input>
            {validaConfimarSenha(confirmaSenha).map((mensagem) => {
              return (
                <span className="text-red-500 text-center pt-1">
                  {mensagem}
                </span>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              id="verSenha"
              onChange={() => {
                setVerSenha(!verSenha);
              }}
            />
            <label htmlFor="verSenha" className="text-white text-xl pl-1">
              Ver senha
            </label>
          </div>
          <div className="flex  text-white gap-4">
            <button
              className="bg-green-700 p-2 rounded-md hoover:bg-orange-500 "
              type="submit"
            >
              Cadastrar
            </button>
            <Link
              className="border p-2 rounded-md hoover:bg-orange-500"
              to="/login"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastrar;
