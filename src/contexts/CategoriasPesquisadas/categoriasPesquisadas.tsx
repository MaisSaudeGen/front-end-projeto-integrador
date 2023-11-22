import { ReactNode, createContext, useState } from "react";
import Categorias from "../../model/Categorias";


interface CategoriasPesquisadasContextType {
  categoriasPesquisadas: Categorias[]
  setCategoriasPesquisadas: (categorias: Categorias[]) => void
  carregando: boolean
  setCarregando: (arg0: boolean) => void
}

interface TypeReactNode {
  children: ReactNode
}

export const CategoriasPesquisadasContext = createContext({} as CategoriasPesquisadasContextType);

export const CategoriaPesquisadaProvider = ({children} : TypeReactNode ) => {
  const [categoriasPesquisadas, setCategoriasPesquisadas] = useState<Categorias[]>([]);
  const [carregando, setCarregando] = useState<boolean>(false);

  const contextValue: CategoriasPesquisadasContextType = {
    categoriasPesquisadas,
    setCategoriasPesquisadas,
    carregando,
    setCarregando,
  };


  return (
    <CategoriasPesquisadasContext.Provider value={contextValue}>
      {children}
    </CategoriasPesquisadasContext.Provider>
  );
};
