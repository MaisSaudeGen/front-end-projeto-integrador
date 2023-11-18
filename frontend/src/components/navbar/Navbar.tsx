import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authProvider/useAuth";

function Header() {
  const navigate = useNavigate();
  const auth = useAuth()
  const exibir = auth.token || "hidden"

  function logout() {
    auth.logout()
    navigate('/login')
  }

  return (
    <header className=
      {`
    bg-principal-4  text-white flex justify-center px-10 py-5
    ${exibir}
    `}>
      <div className="container flex justify-between text-lg">
        <Link to="/">
          <h1 className="text-2xl font-bold">Mais Saúde</h1>
        </Link>
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link
                to="/"
                className="hover:bg-white hover:text-black rounded px-4 py-[0.2rem]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="hover:bg-white hover:text-black rounded px-4 py-[0.2rem]"
              >
                Sobre
              </Link>
            </li>

            <li>
              <Link
                to='/categorias' 
                className='hover:underline'>
                Categorias
              </Link>
            </li>

            <li>
              <button
                onClick={logout}
                className="hover:bg-white hover:text-black rounded px-4 py-[0.2rem]"
              >
                Sair
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
