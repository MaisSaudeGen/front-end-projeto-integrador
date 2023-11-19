
export default function BarraPesquisa() {

  async function pesquisar(e:type) {
    e.preventDefault()
    //procurar no backend
    console.log("não implementado!")
    
  }
  return (
    <form onSubmit={(e) => {pesquisar(e)}}>   
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-white sr-only dark:text-white">Pesquisar</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
          <input 
            type="search" 
            id="default-search" 
            className="block w-full p-4 ps-10 text-md text-white border  rounded-lg bg-black bg-opacity-40
            focus:ring-blue-500 focus:border-blue-500 focus:outline-none
            "
            // dark mode não impl -> dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
            placeholder="Nome do tema" 
            required/>
          <button 
            type="submit" 
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-400 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Pesquisar
            </button>
      </div>
    </form>
  )
}
