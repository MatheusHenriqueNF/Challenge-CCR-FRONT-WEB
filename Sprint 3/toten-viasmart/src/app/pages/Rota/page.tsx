import Botao from "@/app/components/Botao/botao";
import BotaoRota from "@/app/components/BotaoRota/botaorota";
import Link from "next/link";
import React from "react";
import Image from "next/image";


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
      
      <div className="p-5 relative flex flex-col justify-center items-center">

        <div className="w-full h-160">

          <Image className="object-cover" src="/image/rota.png" alt="imagem ilustrativa" width={3000} height={200} />

        </div>
        
        <Link href={"/pages/Imprimir"}><BotaoRota titulo="Imprimir"/></Link>
        
      </div>

      

    </div>
  );
}