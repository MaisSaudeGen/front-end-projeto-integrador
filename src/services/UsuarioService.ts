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
