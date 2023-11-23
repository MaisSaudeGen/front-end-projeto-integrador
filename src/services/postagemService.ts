import { AxiosError } from "axios";
import api from "./API";
import { CriarPost } from "../components/FormCriarPost/FormCriarPost";
import { EdiarPostagem } from "../components/CardPostagem/CardPostagem";


export async function buscarPosts() {
  try {
    const response = await api.get('/postagem')
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return error
    }
    return null
  }
}

export async function criarPost(postagem: CriarPost) {
  try {
    const response = await api.post('/postagem', postagem)
    return response.data
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return error
    }
    return null
  }
}

export async function excluirPost(id: number) {
  console.log("Excluir chamado")
  try {
    const response = await api.delete(`/postagem/${id}`)
    return response.data
    
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return error
    }
    return null
  }
}

export async function editarPost(post: EdiarPostagem) {
  console.log("Editar chamado")
  try {
    const response = await api.put('/postagem', post)
    return response.data
    
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return error
    }
    return null
  }
}

export async function buscarPostPorId(id: string) {
  console.log("Bucar por id chamado", id)
  try {
    const response = await api.get(`/postagem/${id}`)
    return response.data
    
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error)
      return error
    }
    return null
  }
}