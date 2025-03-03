import Link from "next/link";
import Botao from "../components/Botao/botao";

const Consulta = () => {
    return(
        <>
         <div className="w-full h-screen bg-white ">
            <Link href={"/Menu"}>
                <div className="w-full h-20 bg-amber-200 flex justify-end items-center pr-12">
                    <Botao titulo="Voltar" cor="#3B48EF"/>
                </div>
                <div className="w-full h-20 bg-red-500 flex flex-col justify-center items-center pr-12">
                    <h1 className="font-semibold text-5xl">Consultar <span className="text-[#3B48EF]">rota</span></h1>
                    <div className= "w-[232] h-[10] bg-[#3B48EF] mr-28"></div>
                </div>
            </Link>
         </div>
        </>
    );
}

export default Consulta