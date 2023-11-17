import { Link } from "react-router-dom";
import homePageLogo from "/images/home/image-homepage.jpg";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";

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
            <div className="flex justify-around gap-4">
              <div className="flex justify-around gap-4">
                <ModalPostagem />
              </div>
            </div>
          </div>
        </div>

        <img className="w-1/3 rounded-md" src={homePageLogo}></img>
      </div>
    </main>
  );
}

export default Home;
