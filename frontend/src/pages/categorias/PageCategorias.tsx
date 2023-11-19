import { useEffect, useState } from "react";
import ListaCategorias from "../../components/categorias/listaCategorias/ListaCategorias";
import Modal from "../../components/Modal";
import FormCriarCategoria from "../../components/categorias/FormCriarCategoria";

export default function PageCategorias() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col items-center justify-around grow">
      <div className="flex justify-center w-full">
        <Modal isOpen={open} setOpen={setOpen}
        titulo="Criar Categoria"
        descricao=""
        >
          <FormCriarCategoria setOpen={setOpen} />
        </Modal>
        <ListaCategorias />
      </div>
        <div className="my-4">
          <button
          onClick={() => {setOpen(!open)}}
          className="border p-4 rounded-md shadow-md hover:bg-blue-300"
          >Criar nova categoria</button>
        </div>
    </div>
  );
}