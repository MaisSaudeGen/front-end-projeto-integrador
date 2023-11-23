import { useContext } from "react"
import { RecarregarContext } from "."

export const useRecarregarPagina = () => {
  const context = useContext(RecarregarContext)
  return context
}