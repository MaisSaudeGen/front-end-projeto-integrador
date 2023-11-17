import sobreImg from '../../assets/images/sobre/building.jpg';

export default function Sobre() {
  return (
    <main className="flex grow bg-cyan-800">
    <div className="flex justify-center items-center py-8 px-10">
      <div className="w-1/3 mr-4 flex flex-col items-center ">
          <div className="pb-6">
               <h1 className="text-3xl font-bold text-white  text-center">Página em construção</h1>
          </div>
       
        <p className="text-xl text-white">
          Em breve você terá acesso as informações de sobre do nosso projeto.
        </p>
      </div>

      <img className="w-1/3 rounded-md" src={sobreImg}></img>
    </div>
  </main>
  )
}