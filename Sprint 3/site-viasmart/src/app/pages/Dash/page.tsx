import React from "react";
import Image from "next/image";
import BotaoFiltro from "@/app/components/BotaoFiltro/botaoFiltro";
import Link from "next/link";

const Dash = () => {
  const linhas = [
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Normal" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Pausada" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Normal" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Pausada" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Normal" },
    { linha: "Linha 1 - Azul", estacao: "Vila Mariana", status: "Pausada" },
  ];

  return (
    <div className="flex h-screen w-full bg-[#3B48EF] p-10">
      
      <aside className="w-1/4 bg-[#3B48EF] text-white p-6 flex flex-col items-start border-2 rounded-l-2xl">
         <div className="flex items-center gap-3 border-b-2 mb-4">
            <Image src="/image/logo_ccr.png" alt="CCR ViaSmart" className="h-10" width={60} height={60} />
            <div className='w-[2] h-[30] bg-white'></div>
            <h1 className="text-lg font-light">ViaSmart</h1>
        </div>
        
        <div className="w-full flex flex-col gap-4">
            <BotaoFiltro titulo="Filtrar: Linha"/>
            <BotaoFiltro titulo="Filtrar: Estação"/>
            <BotaoFiltro titulo="Filtrar: Normal"/>
            <BotaoFiltro titulo="Filtrar: Pausada"/>
            <br />
            <BotaoFiltro titulo="Cadastrar Usuário"/>
        </div>

        <div className="w-full h-100 flex justify-center items-center mt-4 p-4 rounded-xl">
            <Link href={"/"} className="flex justify-center items-center gap-2">
                <Image src={"/icon/logout.png"} alt="icon logout" width={40} height={40}/>
                <p className="text-3xl font-semibold ">Sair</p>
            </Link>
        </div>
        
      </aside>

      {/* Main Content */}
      <main className="w-3/4 bg-white p-10 rounded-r-2xl">
        <h2 className="text-2xl font-bold mb-4">10 de Março de 2025</h2>
        
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-center p-2">Linha</th>
              <th className="text-center p-2">Estação</th>
              <th className="text-center p-2">Ação</th>
              <th className="text-center p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {linhas.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 text-center">{item.linha}</td>
                <td className="p-4 text-center">{item.estacao}</td>
                <td className="p-4 flex justify-center gap-2">
                  <div className="w-5 h-5 bg-gray-300 rounded"></div>
                  <div className="w-5 h-5 bg-gray-300 rounded"></div>
                </td>
                <td className={`p-2 text-center ${item.status === "Normal" ? "text-green-500" : "text-orange-500"}`}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dash;
