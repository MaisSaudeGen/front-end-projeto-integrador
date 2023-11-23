import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/authProvider";
import { buscar } from "../../../services/Services";
import Usuario from "../../../model/Usuario";
import PerfilUsuario from "../perfilUsuario/PerfilUsuario";

function ListarUsuario() {

    const [user, setUser] = useState<Usuario[]>([]);

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarUsuarios() {
        try {
            await buscar('/usuarios', setUser, {
                headers: { Authorization: token },
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                alert('O token expirou, favor logar novamente')
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado');
            navigate('/login');
        }
    }, [token])

    useEffect(() => {
        buscarUsuarios()
    }, [user.length])

    return (
        <>
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {user.map((usuario) => (
                            <>
                                <PerfilUsuario key={usuario.id} user={usuario} />
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default ListarUsuario