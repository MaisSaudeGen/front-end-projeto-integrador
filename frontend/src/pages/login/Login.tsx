import loginImg from "../../assets/images/login/login.png";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toastAlert from "../../utils/toastAlert";
import { useAuth } from "../../contexts/authProvider/useAuth";

export default function Login() {
  const [verSenha, setVerSenha] = useState(false);
  const [usuarioLogin, setUsuarioLogin] = useState({ usuario: "", senha: "" });
  const navigate = useNavigate();

  const auth = useAuth();
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    toastAlert("Carregando", "info", 500);
    const response = await auth.authenticate(
      usuarioLogin.usuario,
      usuarioLogin.senha
    );
    if (response == "200") {
      navigate("/posts");
      toastAlert("Usuário logado.", "success");
    } else {
      toastAlert(response, "error");
    }
  }

  return (
    <div
      className="flex grow justify-center items-center
    bg-gradient-to-r from-secundario-3 to-principal-3
    "
    >
      <div
        className="
            rounded-xl mx-8 px-8 
            flex justify-center text-white
            shadow-2xl bg-black bg-opacity-40
            
        "
      >
        <div
          className="
          flex flex-col items-center justify-center my-10 
          "
        >
          <img
            className="w-[250px] mb-4"
            src={loginImg}
            alt="Logo mais saúde."
          />
          <form onSubmit={login} className="flex flex-col gap-2">
            <div className="flex text-lg flex-col w-full">
              <label className="text-white text-lg" htmlFor="usuario">
                Email
              </label>
              <input
                required
                type="email"
                id="usuario"
                name="usuario"
                placeholder="voce@exemplo.com"
                className="
                rounded-md p-1 text-lg text-black
                focus:scale-[1.02]
                focus:shadow-2xl
                focus:outline-none"
                value={usuarioLogin.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              ></input>
              {usuarioLogin.usuario.length === 0 ||
                (usuarioLogin.usuario.includes(".") &&
                  usuarioLogin.usuario.includes("@")) || (
                  <span className="text-red-500 text-center pt-1">
                    Email deve incluir '.' e '@'
                  </span>
                )}
            </div>

            <div className="flex flex-col">
              <label className="text-white bold text-lg" htmlFor="senha">
                Senha
              </label>
              <input
                required
                type={verSenha ? "text" : "password"}
                id="senha"
                name="senha"
                placeholder="Digite 8 caracteres ou mais"
                className="
                rounded-md p-1 text-lg text-black
                focus:scale-[1.02]
                focus:shadow-2xl
                focus:outline-none"
                value={usuarioLogin.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              ></input>
            </div>
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                id="verSenha"
                onChange={() => {
                  setVerSenha(!verSenha);
                }}
              />
              <label htmlFor="verSenha" className="text-white text-md pl-1">
                Ver senha
              </label>
            </div>
            <div className="flex flex-col justify-center">
              <button
                type="submit"
                className="
                text-md
                self-center
                text-white bg-green-700 
                py-2 px-6 rounded-md hover:bg-green-600
                font-medium	
                "
              >
                Entrar
              </button>
              <span className="text-white p-3">
                Ainda não possue uma conta?
                <Link
                  to={"/cadastrar"}
                  className="underline pl-1 text-blue-400 "
                >
                  Cadastre-se
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
