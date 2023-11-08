function Cadastrar () {
    return (

        <div className="flex grow justify-center items-center">
          <form className="flex flex-col  justify-center items-center bg-lime-600">
            <h2 className="">Cadastrar</h2>
            <div className="">
            <label htmlFor="usuario">Usuário</label>
            <input  
            type="text" id="usuario" name="usuario" placeholder="Usuario" className=""></input>
            </div>

            <div className="">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" className=""></input>
            </div>
            
            <div className="">
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" name="senha" placeholder="Senha" className=""></input>
            </div>

            <div className=""> 
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar Senha" className=""></input>
            </div>

            <div className="">
            <button>Cadastrar</button>
            </div>
          </form>
        </div>

    )
}

export default Cadastrar;