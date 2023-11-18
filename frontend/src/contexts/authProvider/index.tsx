import { createContext, useEffect, useState } from "react";
import { IContext, IAuthProvider, IUser } from "./types";
import { loginRequest, getUserLocalStorage, setUserLocalStorage } from "./Utils";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(()=>{
    const user = getUserLocalStorage();

    if(user){
      setUser(user)
    }
  }, [])

  async function authenticate(email: string, password: string) {
    const response = await loginRequest(email, password);
    console.log(response)
    
    if(response?.code === "ERR_BAD_REQUEST") {
      return "Usuário ou senha inválidos."
    }
    
    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);

    return "200"
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
