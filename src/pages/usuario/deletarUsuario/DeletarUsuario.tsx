import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { RotatingLines } from "react-loader-spinner"
import { AuthContext } from '../../../contexts/authProvider'
import { buscar, deletar } from '../../../services/Services'
import Usuario from '../../../model/Usuario'

function DeletarUsuario() {
    
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario)

    const { id } = useParams<{ id: string }>()

    const { user, handleLogout } = useContext(AuthContext)
    const token = user.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/usuarios/${id}`, setUsuario, {
                headers: {
                    'Authorization': token
                }
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
            alert('Você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarUsuario() {
        setIsLoading(true)

        try {
            await deletar(`/usuarios/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Usuário excluído com sucesso')

        } catch (error) {
            alert('Erro ao excluir o Usuário')
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/usuarios")
    }

    return (
<div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Usuário</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja deletar o usuário?
    		</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Usuário
                </header>
                
                <div className="p-4">
                    <p className='text-xl h-full'>{usuario.usuario}</p>
                    <p>{usuario.nome}</p>
                </div>
                <div className="flex">
                    <button
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>

                    <button
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarUsuario}>
                            
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarUsuario

