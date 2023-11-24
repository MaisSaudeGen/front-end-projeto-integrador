import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import perfilImg from "../../assets/images/ColunaLateral/User.png";
import temasImg from "../../assets/images/ColunaLateral/Search.png";
import controle from "../../assets/images/ColunaLateral/control.png";
import defaultUserImg from "../../assets/images/default/user.svg";
import { useUserInfo } from "../../contexts/UserContex/useUserInfo";
import Categorias from "../../model/Categorias";
import { pegarCategorias } from "../../services/categoriasService";
import { useCategoriasPesquisadas } from "../../contexts/CategoriasPesquisadas/useCategoriasPesquisadas";

export default function ColunaLateral() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useUserInfo();
  const [temas, setTemas] = useState<Categorias[]>([])
  const {setCategoriasPesquisadas} = useCategoriasPesquisadas()

  useEffect(()=> {
    async function buscar() {
      const categorias = await pegarCategorias()
      setTemas(categorias)
    }
    buscar()
  }, [])

  const Menus = [
    { title: "Perfil", src: perfilImg, rota: '/usuarios', gap: true },
    { title: "Temas", src: temasImg, temas: true },
  ];

  function handleUsuario() {
    navigate("/usuarios");
  }

  function handleFilter(tema: Categorias) {
    setCategoriasPesquisadas([tema])
  }

  return (
    <div
      className={`flex fixed h-full -top-0 ${
        open ? "" : "-left-10 sm:-left-0"
      }`}
    >
      <div
        className={` ${
          open ? "w-72" : "w-[1px] sm:w-20"
        } bg-black bg-opacity-50 backdrop-blur-sm  p-5 relative duration-300 pt-[100px]`}
      >
        <img
          src={controle}
          className={`absolute cursor-pointer -right-3 top-[127px] w-7 border-black bg-opacity-50
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-4 items-center">
          <img
            // Verificar se o usuário enviou a imagem
            src={user.foto || defaultUserImg}
            alt="Foto do usuário"
            className={`
            ${!open ? "hidden" : "w-[100px] h-[100px]"}
            object-cover object-center
            rounded-full border 
            cursor-pointer`}
          />
          <button
            onClick={() => handleUsuario()}
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {user.nome}
          </button>
        </div>
        <ul className="pt-6 flex flex-col gap-2">
          {Menus.map((Menu, index) => (
            <li
              onClick={() => { Menu.rota && navigate(Menu.rota)} }
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} 
            ${Menu.temas ? "" : ""}
            `}
            >
              <img src={Menu.src} />
              <span className={`${!open && "hidden"} font-bold text-xl origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
          {temas.map((tema, index) => (
              <li key={index} className={`text-xl ${!open && "hidden"} `}>
                <button 
                onClick={() => handleFilter(tema)}
                className="text-white hover:underline">{tema.nome}</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
