import { GithubLogo } from "@phosphor-icons/react";
import { useAuth } from "../../contexts/authProvider/useAuth";


function Footer() {
  const {user} = useAuth();
  const exibir = user.token ? "" : "hidden";

  return (
    <footer
      className={`flex justify-center bg-indigo-900 text-white ${exibir} z-10`}
    >
      <div className="container flex flex-col items-center py-4">
        <h2 className="text-xl font-bold">Mais Saúde App</h2>
        <ul className="list-none">
          <li className="flex justify-center items-center">
            <a
              className="flex flex-col justify-center items-center"
              href="https://github.com/MaisSaudeGen"
            >
              <GithubLogo size={48} weight="bold" />
              <span>Repositório do Projeto</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
