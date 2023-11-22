import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authProvider/useAuth";
import logo from "../../assets/images/login/login.png";

function Header() {
  const navigate = useNavigate();
  const auth = useAuth();
  const exibir = auth.token ? "" : "hidden";

  function logout() {
    auth.logout();
    navigate("/login");
  }

  return (
    <header
      className={`
      bg-gradient-to-r from-secundario-4 to-principal-4  text-white flex justify-center px-8 py-2
    ${exibir}
    `}
    >
      <div className="container flex justify-between text-lg">
        <Link to="/">
          <img src={logo} className="h-[50px]" alt="" />
        </Link>
        <nav className="flex justify-center items-center">
          <ul className="flex gap-4 justify-center items-center">
            <li>
              <Link to="/categorias" className="hover:underline">
                Categorias
              </Link>
            </li>
            <li>
              <Link to="/postagens" className="hover:underline">
                Postagens
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className="hover:underline rounded px-4 py-[0.2rem]"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/usuarios" className="hover:underline">
                Usuario
              </Link>
            </li>
            <li>
              <button onClick={logout} className="hover:underline rounded px-2">
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
