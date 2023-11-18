import loginImg from "../../assets/images/login/login.png";
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../../contexts/authProvider/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toastAlert from "../../utils/toastAlert";
import { useAuth } from "../../contexts/authProvider/useAuth";

export default function Login() {
  const [usuarioLogin, setUsuarioLogin] = useState({ usuario: "", senha: "" });
  const { usuario, handleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const auth = useAuth()
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  // async function login(e: ChangeEvent<HTMLFormElement>) {
  //   e.preventDefault();

  //   toastAlert("Carregando", "info", 500)
  //   const resultado = await handleLogin(usuarioLogin);

  //   resultado.includes('403') || resultado.includes('401') && (
  //     toastAlert("Email ou senha incorretos.", "error")
  //   )
    
  //   if(resultado.includes('200')){
  //     toastAlert("Usuário logado.", "success");
  //     navigate('/postagens')
  //   }
  // }
   async function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    toastAlert("Carregando", "info", 500)
    console.log(usuarioLogin, "oi")
    const response = await auth.authenticate(usuarioLogin.usuario, usuarioLogin.senha)
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
          <img className="w-[250px] mb-4" src={loginImg} alt="Logo mais saúde." />
          <form onSubmit={login}>
            <div className="flex text-lg flex-col w-full mb-2">
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
              {
              usuarioLogin.usuario.length === 0 || 
                ( 
                  usuarioLogin.usuario.includes(".") &&
                  usuarioLogin.usuario.includes("@")
                ) ||
              <span className="text-red-500 text-center pt-1">
                Email deve incluir '.' e '@'
              </span>
              }
            </div>

            <div className="flex flex-col">
              <label className="text-white bold text-lg" htmlFor="senha">
                Senha
              </label>
              <input
                required
                type="password"
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
              { (usuarioLogin.senha.length > 0 && usuarioLogin.senha.length < 8 ) &&
              <span className="text-red-500 text-center pt-1">
                Digite no mínimo 8 caracteres.
              </span>
              }
            </div>

            <div className="flex flex-col justify-center">
              <button
                type="submit"

                className=" mt-4
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
