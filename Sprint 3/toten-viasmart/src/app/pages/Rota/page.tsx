import Botao from "@/app/components/Botao/botao";
import BotaoRota from "@/app/components/BotaoRota/botaorota";
import Link from "next/link";
import React from "react";


export default function MetroRoute() {
  return (
    <div className="w-full h-screen bg-white ">
    <Link href={"/Menu"}>
        <div className="w-full h-20 flex justify-end items-center pr-12">
            <Botao titulo="Voltar" cor="#3B48EF"/>
        </div>
        <div className="w-full h-20 flex flex-col justify-center items-center pr-12">
            <h1 className="font-semibold text-5xl">Consultar <span className="text-[#3B48EF]">rota</span></h1>
            <div className= "w-[232] h-[10] bg-[#3B48EF] mr-28"></div>
        </div>
    </Link>
      
      <div className="p-5 relative flex flex-col justify-center items-center my-12 bg-amber-300">
        <div className="flex items-center relative bg-amber-600">
          {["Vila Mariana", "Ana Rosa", "Paraíso", "Vergueiro", "São Joaquim", "Liberdade", "Sé", "Pedro II", "Brás", "Bresser - Mooca"].map((station, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
              <span className="text-sm text-blue-500 transform -rotate-30 whitespace-nowrap">
                {station}
              </span>
              {index < 9 && (
                <div className="w-10 h-1 bg-blue-600 absolute top-1/2 left-full -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <BotaoRota titulo="Imprimir"/>
      </div>

      

    </div>
  );
}