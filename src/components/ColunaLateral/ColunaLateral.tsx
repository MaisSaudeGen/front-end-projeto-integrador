import { useState } from "react";

export default function ColunaLateral() {
  const [open, setOpen] = useState(false);

  const Menus = [
    { title: "Dashboard", src: "/images/ColunaLateral/Chart_fill" },
    { title: "Inbox", src: "/images/ColunaLateral/Chat" },
    { title: "Accounts", src: "/images/ColunaLateral/User", gap: true },
    { title: "Schedule ", src: "/images/ColunaLateral/Calendar" },
    { title: "Search", src: "/images/ColunaLateral/Search" },
    { title: "Analytics", src: "/images/ColunaLateral/Chart" },
    { title: "Files ", src: "/images/ColunaLateral/Folder", gap: true },
    { title: "Setting", src: "/images/ColunaLateral/Setting" },
  ];

  return (
    <div className="flex fixed h-full -top-0">
    <div
      className={` ${ 
        open ? "w-72" : "w-20"
      } bg-black bg-opacity-50 backdrop-blur-sm  p-5 relative duration-300 pt-[100px]`}
    >
      <img
        src="./src/assets/images/ColunaLateral/control.png"
        className={`absolute cursor-pointer -right-3 top-[127px] w-7 border-black bg-opacity-50
         border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          // Verificar se o usuário enviou a imagem 
          src={"./src/assets/images/default/user.svg"}
          alt="Foto do usuário"
          className={`cursor-pointer duration-500  ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Nome do Usuário
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
            ${Menu.gap ? "mt-9" : "mt-2"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`./src/assets/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
    {/* <div className="h-screen flex-1 p-7">
      <h1 className="text-2xl font-semibold ">Home Page</h1>
    </div> */}
  </div>
  )
}
