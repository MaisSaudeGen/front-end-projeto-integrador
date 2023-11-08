import loginImage from "../../../public/images/cadastro/login-image.jpg";

function Cadastrar() {
  return (
    <div className="flex grow justify-center items-center bg-green-500">
      <div className="flex justify-center">
        <form
          className="flex 
          flex-col  justify-center items-center bg-blue-900 p-10 rounded-lg drop-shadow-lg"
        >
          <h2 className="text-2xl font-bold text-bold text-white pb-6">
            Cadastrar
          </h2>
          <div className="flex flex-col mb-2">
            <label className="text-white text-lg" htmlFor="usuario">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="rounded-md p-1"
            ></input>
          </div>

          <div className="flex flex-col  mb-2">
            <label className="text-white text-lg" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="rounded-md p-1"
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="senha">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="rounded-md p-1"
            ></input>
          </div>

          <div className="flex flex-col">
            <label className="text-white text-lg" htmlFor="confirmarSenha">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirmar Senha"
              className="rounded-md p-1"
            ></input>
          </div>

          <div className="mt-6 text-white bg-green-700 p-3 rounded-md hoover:bg-orange-500">
            <button>Cadastrar</button>
          </div>
        </form>
        <div className="max-w-[40%] ">
          <img className="rounded-md" src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Cadastrar;
