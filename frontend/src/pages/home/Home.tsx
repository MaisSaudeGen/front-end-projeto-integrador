import { Link } from "react-router-dom";
import homePageLogo from "../../assets/images/home/image-homepage.jpg";

function Home() {
  return (
    <main className="flex grow bg-cyan-800">
      <div className="flex justify-center items-center py-8 px-10">
        <div className="w-1/3 mr-4 flex flex-col items-center ">
            <div className="pb-6">
                 <h1 className="text-3xl font-bold text-white  text-center">Bem Vindes</h1>
            </div>
         
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            necessitatibus eligendi, ab molestias vel ut commodi doloremque
            mollitia labore, rem provident. Libero quos laudantium quia non,
            ducimus eos provident vero!
          </p>

          <div className="pt-6">
            <ul className="flex gap-4">
            <li><Link to="/login" className="bg-lime-200  hover:bg-lime-500 hover:text-black rounded px-4 py-[0.2rem]">Login</Link></li>
            <li><Link to="/cadastrar" className="bg-lime-200  hover:bg-lime-500 hover:text-black rounded px-4 py-[0.2rem]">Cadastrar</Link></li>
            </ul>
          </div>
        </div>

        <img className="w-1/3 rounded-md" src={homePageLogo}></img>
      </div>
    </main>
  );
}

export default Home;
