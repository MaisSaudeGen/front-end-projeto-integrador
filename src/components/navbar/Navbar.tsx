import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authProvider/useAuth";
import logo from "../../assets/images/login/login.png";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  function sair() {
    logout();
    navigate("/login");
  }
  const Links = [
    { name: "Temas", link: "/temas" },
    { name: "Postagens", link: "/postagens" },
    { name: "Sobre", link: "/sobre" },
    { name: "Perfil", link: "/usuarios" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <div className="z-30 bg-indigo-900 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-around py-4 md:px-10 px-7">
        <div
          onClick={() => navigate('/')}
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
          text-gray-800"
        >
          <img src={logo} className="w-[150px]" alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-10 top-5 cursor-pointer md:hidden"
        >
          {open ? (
            <svg
              className="w-[50px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          ) : (
            <svg
              className="w-[50px]"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static md:z-auto
           z-10 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in 
           bg-zinc-100 md:bg-transparent
           ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <Link
                to={link.link}
                className="text-black md:text-white hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className="text-xl md:pl-9 mb-4 md:mb-0 md:text-white text-black hover:text-gray-400 duration-500"
            onClick={sair}
          >
            Sair
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Header;

