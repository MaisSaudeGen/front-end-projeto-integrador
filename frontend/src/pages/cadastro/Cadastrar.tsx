import loginImage from "../../../public/images/cadastro/login-image.jpg";
import { useNavigate } from "react-router-dom";
import Usuario from '../../model/Usuario'
import { cadastrarUsuario } from "../../services/Services";
import { ChangeEvent, useEffect, useState } from "react";



function Cadastrar() {


  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    email: '',
    foto: ''
  })

  // const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
  //   id: 0,
  //   nome: '',
  //   usuario: '',
  //   senha: '',
  //   email: '',
  //   foto: ''
  // })

  useEffect(() => {
    if (usuario.id !== 0) {
      back()
    }
  }, [usuario])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    
    console.log ({usuario})
    console.log ("confirmarSenha",  confirmaSenha, " senha ", usuario.senha, )
    console.log ("tamanho da senha ", usuario.senha.length ) 


    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
     
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario)
        alert('Usuário cadastrado com sucesso')

      } catch (error) {
        alert('Erro ao cadastrar o Usuário')
      }

      finally{
        console.log(usuario)
      }

    } else {
      alert('Dados inconsistentes. Verifique as informações de cadastro.')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }


  
  return (
    <div className="flex grow justify-center items-center bg-green-500">
      <div className="flex justify-center">
        <form
          onSubmit={cadastrarNovoUsuario}
          className="flex 
          flex-col  justify-center items-center bg-blue-900 p-10 rounded-lg drop-shadow-lg"
        >
          <h2 className="text-2xl font-bold text-bold text-white pb-6">
            Cadastrar
          </h2>
          <div className="flex flex-col mb-2">
            <label className="text-white text-lg" htmlFor="nome">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="nome"
              className="rounded-md p-1"
              value={usuario.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            ></input>
          </div>

          <div className="flex flex-col  mb-2">
            <label className="text-white text-lg" htmlFor="usuario">
              Usuario
            </label>
            <input
              type="usuario"
              id="usuario"
              name="usuario"
              placeholder="usuario"
              className="rounded-md p-1"
              value={usuario.usuario}
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
              value={usuario.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
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
              value={confirmaSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
            ></input>
          </div>

          <div className="mt-6 text-white bg-green-700 p-3 rounded-md hoover:bg-orange-500">
            <button type="submit">Cadastrar</button>
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
