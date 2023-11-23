import { ReactNode, createContext, useState } from "react";

export interface User {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
}

interface UserContextType {
  user: User
  setUser: (user: User) => void
}

interface TypeReactNode {
  children: ReactNode
}

export const UserInfo = createContext({} as UserContextType);

export const UserInfoProvider = ({children} : TypeReactNode ) => {
  const [user, setUser] = useState<User>({} as User);

  return (
    <UserInfo.Provider value={{ user, setUser }}>
      {children}
    </UserInfo.Provider>
  );
};
