import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/authProvider";
import Usuario from "../../../model/Usuario";
import CardUsuario from "../perfilUsuario/PerfilUsuario";
import { buscarUsuarioPorId } from "../../../services/UsuarioService";

function ListarUsuario() {
  const [user, setUser] = useState<Usuario>({} as Usuario);

  const auth = useContext(AuthContext);

  async function buscarUsuario() {
    try {
      if (auth.user.id) {
        const resposta = await buscarUsuarioPorId(auth.user.id);
        if (resposta) {
          setUser(resposta);
        }
      }
    } catch (error) {
      alert("O token expirou, favor logar novamente");
      auth.logout();
    }
  }

  useEffect(() => {
    buscarUsuario();
  }, []);

  return (
    <div className="flex flex-col grow items-center justify-center">
      <div className="flex w-[500px]">
        <CardUsuario key={user.id} usuario={user} />
      </div>
    </div>
  );
}

export default ListarUsuario;
