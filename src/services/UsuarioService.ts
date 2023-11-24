import { AxiosError } from "axios";
import api from "./API";
import Usuario from "../model/Usuario";


export async function buscarUsuarios() : Promise<Usuario[] | AxiosError  | null>  {
  try {
    const response = await api.get('/usuarios')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return error
    }
    return null
  }
}

export async function buscarUsuarioPorId(id: number) : Promise<Usuario | null>  {
  try {
    const response = await api.get('/usuarios/' + id)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    }
    return null
  }
}

export async function editarUsuario(usuario: Usuario) : Promise<Usuario | null>  {
  try {
    const response = await api.put('/usuarios', usuario)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
    }
    return null
  }
}