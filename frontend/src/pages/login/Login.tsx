import loginImg from '../../../public/images/login/login.jpg';
import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../model/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';


export default function Login(){

  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const {isLoading} = useContext(AuthContext) 

  useEffect(() => {
    if (usuario && usuario.token !== "") {
        navigate('/sobre')
    }
}, [usuario])

function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
  setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
  })
}

function login(e: ChangeEvent<HTMLFormElement>) {
  e.preventDefault()
  handleLogin(usuarioLogin)
}


  return (
    <div className="flex grow justify-center items-center bg-green-500">
      <div className="flex justify-center flex-row-reverse">
        <form
          onSubmit={login}
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
              value={usuarioLogin.usuario} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
              value={usuarioLogin.senha} 
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            ></input>
          </div>

          <div>
           
            <button type='submit' className="mx-3 mt-6 text-white bg-green-700 p-3 rounded-md hoover:bg-orange-500" >Entrar</button >
            <button  className="mx-3 mt-6 text-white p-3 rounded-md hoover:bg-orange-500 border">Esqueci a senha
            </button>
          </div>
        </form>
        <div className="max-w-[50%] ">
          <img className="rounded-md" src={loginImg} alt="" />
        </div>
      </div>
    </div>
  )
}