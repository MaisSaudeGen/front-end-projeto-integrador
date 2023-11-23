import { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IUser } from "./types";
import { loginRequest, getUserLocalStorage, setUserLocalStorage, UsuarioComToken } from "./Utils";
import { pegarCategorias } from "../../services/categoriasService";
import { AxiosError } from "axios";
import toastAlert from "../../utils/toastAlert";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(()=>{
    const user = getUserLocalStorage();

    if(user){
      
      //verificar se o token é valido.
      //Todo: criar roda específica no back para validar o token
      //Estamos pegando os dados e não utilizando
      verificarTokenValido()

      setUser(user)
    }
  }, [])

  async function verificarTokenValido() {
    const resposta = await pegarCategorias();

    console.log(resposta);

    if (resposta instanceof AxiosError) {
      if (resposta.message.includes("401") || resposta.message.includes('403')) {
        toastAlert("Por favor, faça login para continuar.", "info");
        logout()
      }
    }

  }

  async function authenticate(email: string, password: string): Promise<[UsuarioComToken, string]> {
    const response = await loginRequest(email, password);
    console.log(response)

    if (response == null ) {
      toastAlert("Erro inesperado no processo de login", "erro", 3000)
      return [{} as UsuarioComToken, "400"]
    }
    
    if(response instanceof AxiosError) {
      return [{} as UsuarioComToken, "400"]
    }
    
    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);

    return [response, "200"]
  }

  function logout() {
    setUser({} as IUser);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
