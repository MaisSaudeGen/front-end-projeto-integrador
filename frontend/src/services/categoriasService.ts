import { AxiosError } from "axios";
import api from "./API";
import { CriarCategoria } from "../components/categorias/FormCriarCategoria";


export async function pegarCategorias() {

  try {
    const response = await api.get('/categorias/all')
    return response.data
    
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return error
    }
    return null
  }
}

export async function criarCategoria(categoria: CriarCategoria) {

  try {
    const response = await api.post('/categorias/cadastrar', categoria)
    return response.data
    
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return error
    }
    return null
  }
}