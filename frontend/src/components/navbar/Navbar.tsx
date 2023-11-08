import { Link } from "react-router-dom";

function Header () {
    return (
        <header className="basis-auto grow-0 w-full bg-indigo-900 text-white flex justify-center px-10 py-5 ">
            <div className="container flex justify-between text-lg">
                <Link to='/'>
                    <h1 className="text-2xl font-bold">Mais Saúde</h1>
                </Link>
                <nav >
                    <ul className="flex gap-4">
                        <li><Link to="/" className="hover:bg-white hover:text-black rounded px-4 py-[0.2rem]">Home</Link></li>
                        <li><Link to="/login" className="hover:bg-white hover:text-black rounded px-4 py-[0.2rem]">Login</Link></li>
                        <li><Link to="/cadastrar" className="hover:bg-white hover:text-black rounded px-4 py-[0.2rem]">Cadastrar</Link></li>
                        <li><Link to="/sobre" className="hover:bg-white hover:text-black rounded px-4 py-[0.2rem]">Sobre</Link></li>
                        <li><Link to="/" className="hover:bg-white hover:text-black rounded px-4 py-[0.2rem]">Sair</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;