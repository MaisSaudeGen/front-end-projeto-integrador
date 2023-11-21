import { Link } from "react-router-dom";
import homePageLogo from "../../assets/images/home/image-homepage.jpg";

function Home() {
  return (
    <main className="flex grow">
      <div className="flex grow justify-center items-center">
        <div className="bg-black bg-opacity-50 flex items-center justify-center rounded-2xl
        overflow-hidden
        ">
          <div className="flex flex-col justify-center  items-center gap-6 p-4">
            <h1 className="text-3xl font-bold text-white text-center">
              Mais Saúde
            </h1>
            <p className="text-xl text-white max-w-[500px] text-center">
            Mais Saúde é uma plataforma dedicada a conectar pessoas e promover a saúde mental. Junte-se a nós para construir uma comunidade de apoio e compartilhar conhecimentos essenciais para o bem-estar.
            </p>
            <div className="flex flex-col ">
              <Link
                to="/login"
                className="
                  text-md
                  self-center
                  text-white bg-green-700 
                  py-2 px-6 rounded-md hover:bg-green-600
                  font-medium	"
              >
                Entrar
              </Link>
              <span className="text-white p-3">
                Ainda não possue uma conta?
                <Link
                  to={"/cadastrar"}
                  className="underline pl-1 text-blue-400 "
                >
                  Cadastre-se
                </Link>
              </span>
            </div>
          </div>
            <img className="hidden lg:block max-w-[500px] " src={homePageLogo}></img>
        </div>
      </div>
    </main>
  );
}

export default Home;
