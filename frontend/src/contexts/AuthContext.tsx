import {createContext, ReactNode, useState } from "react"

import UsuarioLogin from "../model/UsuarioLogin"
import {login} from "../services/Services"
import { AxiosError } from "axios"

interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: {usuario: string, senha:string} ): Promise<string>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

   

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(userLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, userLogin, setUsuario)
            setIsLoading(false)
            return "200"
            
        } catch (error) {
            if (error instanceof AxiosError){
                setIsLoading(false)
                return error.message
            }
            return error
        }
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            usuario: "",
            nome: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}