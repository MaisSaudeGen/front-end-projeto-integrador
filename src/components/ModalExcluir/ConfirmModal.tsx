interface Props {
  isOpen: boolean
  onConfirm: () => void
  showModal: (show: boolean) => void
  message: string
  titleItem: string
}

export const ConfirmModal = ({ isOpen, showModal, onConfirm, message, titleItem}: Props) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <div className="bg-blue-900 dark:bg-black dark:bg-opacity-70 fixed top-0 right-0 left-0 bottom-0  ">
      <div className="fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]
        bg-blue-900 dark:bg-zinc-700 p-8 rounded-xl
        flex flex-col items-center shadow-2xl border
        ">
        <h2 className="text-2xl font-bold text-white pb-4" >{message}</h2>
        <p className="text-xl font-bold text-white pb-4">{titleItem}</p>
        <div className="flex gap-4">
        <button className="py-2 px-8 border text-white rounded-md bg-green-600 hover:bg-green-400" 
          onClick={
          () => {onConfirm(); showModal(false)}
          }>
            Sim
        </button>
        <button className="py-2 px-8 border text-white rounded-md bg-red-600 hover:bg-red-400" 
          onClick={
          () => {showModal(false)}
          }>
            Não
        </button>
        </div>
      </div>
    </div>
  );
};