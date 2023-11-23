import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUserInfo } from '../../../contexts/UserContext/useUserInfo'
import { useAuth } from '../../../contexts/authProvider/useAuth'


function Usuario() {

    const navigate = useNavigate()
    const {token} = useAuth()
    const {user} = useUserInfo()

    useEffect(() => {
        if (token === "") {
            alert('Você precisa estar logado')
            navigate("/login")
        }
    }, [token])

    return (
        <div className='container mx-auto mt-4 rounded-2xl overflow-hidden'>

            <img 
                className='w-full h-72 object-cover border-b-8 border-white' 
                src="https://i.imgur.com/ZZFAmzo.jpg" alt="Capa do Perfil" />

            <img 
                className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' 
                src={user.foto} alt={`Foto de perfil de ${user.nome}`} />

            <div 
                className="relative mt-[-6rem] h-72 flex flex-col 
                    bg-sky-500 text-white text-2xl items-center justify-center"
            >
                <p>Nome: {user.nome} </p>
                <p>Email: {user.usuario}</p>
            </div>

            <div className="flex">
                <Link to={`/editarUsuarios/${user.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarUsuarios/${user.id}`}
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                        flex items-center justify-center'>
                    <button>Excluir</button>
                </Link>
            </div>

        </div>
    )
}

export default Usuario