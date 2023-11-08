import loginImg from '../../../public/images/login/login.jpg';

export default function Login(){
  return (
    <div className="flex grow justify-center items-center bg-green-500">
      <div className="flex justify-center flex-row-reverse">
        <form
          className="flex 
          flex-col  justify-center items-center bg-blue-900 p-10 rounded-lg drop-shadow-lg"
        >
          <h2 className="text-2xl font-bold text-bold text-white pb-6">
            Entrar
          </h2>

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

          <div>
            <button className="mx-3 mt-6 text-white bg-green-700 p-3 rounded-md hoover:bg-orange-500">Entrar</button>
            <button className="mx-3 mt-6 text-white p-3 rounded-md hoover:bg-orange-500 border">Esqueci a senha</button>
          </div>
        </form>
        <div className="max-w-[50%] ">
          <img className="rounded-md" src={loginImg} alt="" />
        </div>
      </div>
    </div>
  )
}