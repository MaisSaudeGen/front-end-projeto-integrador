import Categorias from "./Categorias"
import Usuario from "./Usuario"

export default interface Postagem{
    id: number
    texto: string
    data: string
    titulo:  string
    corpo:  string
    likes: number
    compartilhamentos: number
    comentarios: string
    categorias: Categorias
    usuario: Usuario
}