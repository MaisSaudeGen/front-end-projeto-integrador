interface Props {
  isOpen: boolean
  onConfirm: () => void
  mostrarModal: (mostrar: boolean) => void
  mensagem: string
  tituloCard: string
}

export const ConfirmModal = ({ isOpen, mostrarModal, onConfirm, mensagem, tituloCard}: Props) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="bg-blue-900 fixed top-0 right-0 left-0 bottom-0 bg-opacity-70 ">
      <div className="fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]
        bg-blue-900 p-8 rounded-xl
        flex flex-col items-center shadow-2xl border
        ">
        <h2 className="text-2xl font-bold text-white pb-4" >{mensagem}</h2>
        <p className="text-xl font-bold text-white pb-4">{tituloCard}</p>
        <div className="flex gap-4">
        <button className="py-2 px-8 border text-white rounded-md bg-green-600 hover:bg-green-400" 
          onClick={
          () => {onConfirm(); mostrarModal(false)}
          }>
            Sim
        </button>
        <button className="py-2 px-8 border text-white rounded-md bg-red-600 hover:bg-red-400" 
          onClick={
          () => {mostrarModal(false)}
          }>
            Não
        </button>
        </div>
      </div>
    </div>
  );
};