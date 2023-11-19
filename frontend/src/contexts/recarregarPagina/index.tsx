import { ReactNode, createContext, useState } from "react";


interface RecarrecarContextoTipo {
  recarregar: boolean
  setRecarregar: (arg0: boolean) => void
}

interface TypeReactNode {
  children: ReactNode
}

export const RecarregarContext = createContext({} as RecarrecarContextoTipo);

export const RecarregarPaginaProvider = ({children} : TypeReactNode ) => {
  const [recarregar, setRecarregar] = useState<boolean>(false);

  return (
    <RecarregarContext.Provider value={{ recarregar, setRecarregar }}>
      {children}
    </RecarregarContext.Provider>
  );
};
