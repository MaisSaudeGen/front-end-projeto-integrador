import { useContext } from "react"
import { CategoriasPesquisadasContext } from "./categoriasPesquisadas"

export const useCategoriasPesquisadas = () => {
  const context = useContext(CategoriasPesquisadasContext)
  return context
}