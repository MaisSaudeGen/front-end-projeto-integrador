import { GithubLogo } from "@phosphor-icons/react";

function Footer () {
    return (
        <footer className="flex justify-center bg-indigo-900 text-white">
            <div className="container flex flex-col items-center py-4">
            <h2 className="text-xl font-bold">Mais Saúde App</h2>
            <ul className="list-none">
                <li className="flex items-center">
                    <GithubLogo size={48} weight="bold"/> 
                    <a href="https://github.com/MaisSaudeGen">Repositório do Projeto</a>
                </li>
            </ul>
            </div>

        </footer>
    )
}

export default Footer;