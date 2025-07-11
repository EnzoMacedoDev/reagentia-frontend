import React from "react";
import Logo from "../img/reagentia.png";
import { User, Home, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-screen bg-[#2bb89d] w-52 text-white flex flex-col items-center p-4">
      <img src={Logo} alt="" className="w-20 rounded-full" />

      <nav className="space-y-6 mt-10 w-full ">
        <a
          href="/dashboard"
          className="w-auto p-2 flex items-center gap-2 bg-[#2bb89d] rounded-full hover:bg-[#235583] hover:text-white pl-2 transition duration-300 ease-in-out hover:rounded-full"
        >
          <Home size={18} /> Dashboard
        </a>
        <a
          href="/perfil"
          className="w-auto p-2 flex items-center gap-2 bg-[#2bb89d] rounded-full hover:bg-[#235583] hover:text-white pl-2 transition duration-300 ease-in-out hover:rounded-full"
        >
          <User size={18} /> Perfil
        </a>
        <a
          href="/configuracoes"
          className="w-auto p-2 flex items-center gap-2 bg-[#2bb89d] rounded-full hover:bg-[#235583] hover:text-white pl-2 transition duration-300 ease-in-out hover:rounded-full"
        >
          <Settings size={18} /> Configurações
        </a>
      </nav>
    </aside>
  );
}
