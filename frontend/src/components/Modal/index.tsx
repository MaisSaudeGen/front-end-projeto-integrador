import { ReactNode } from "react"

interface Props {
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
  descricao: string
  titulo: string
  children: ReactNode
}

export default function Modal({isOpen, setOpen, descricao, titulo, children}: Props) {
  if (isOpen){
    return (
      <div className="bg-blue-900 fixed top-0 right-0 left-0 bottom-0 bg-opacity-70 ">
        <div className="fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]
          bg-blue-900 p-8 rounded-xl
          flex flex-col items-center shadow-2xl border"
        >
          <h2 className="text-xl font-bold text-white pb-4">{titulo}</h2>
          <p className="">{descricao}</p>
          {children}
          <button 
          className="border py-2 px-8 bg-red-400 text-white rounded-md shadow-md hover:bg-blue-300"
          onClick={() => setOpen(!isOpen) }>Fechar</button>
        </div>
      </div>
    )
  }
  else {
    return <></>
  }
}
