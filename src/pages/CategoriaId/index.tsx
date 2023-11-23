import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { buscarCategoriaPorId } from "../../services/categoriasService"
import CardCategorias from "../../components/categorias/cardCategorias/CardCategorias"
import Categorias from "../../model/Categorias"
import { AxiosError } from "axios"
import toastAlert from "../../utils/toastAlert"

export default function PageCategoriaId() {
  const { idCategoria } = useParams<string>()
  const [categoria, setCategoria] = useState<Categorias>({} as Categorias)
  const navigate = useNavigate()

  useEffect(() => {
    if (idCategoria){
      buscarCard(idCategoria)
    }
  }, [])

  async function buscarCard(cardId:string) {
    const response = await buscarCategoriaPorId(cardId)

    if(response instanceof AxiosError){
      toastAlert("Id não encontrado", "error", 3000)
      navigate('/categorias')
    } else if (response.id == idCategoria) {
      setCategoria(response)
    }

  }
  
  return (
    <div className="flex flex-grow justify-center items-center">
      <CardCategorias key={categoria.id} {...categoria}/>
    </div>
  )
}
