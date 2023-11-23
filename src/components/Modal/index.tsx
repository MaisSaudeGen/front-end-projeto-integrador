import { ReactNode } from "react"

interface Props {
  isOpen: boolean
  descricao: string
  titulo: string
  children: ReactNode
}

export default function Modal({isOpen, descricao, titulo, children}: Props) {
  if (isOpen){
    return (
      <div className="z-10 bg-blue-900 fixed top-0 right-0 left-0 bottom-0 bg-opacity-70 ">
        <div className="fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]
          bg-zinc-800 p-8 rounded-xl gap-2
          flex flex-col items-center shadow-2xl border"
          >
          <h2 className="text-2xl font-bold text-white pb-2">{titulo}</h2>
          <p className="text-white w-[90%]">{descricao}</p>
          {children}

        </div>
      </div>
    )
  }
  else {
    return <></>
  }
}
