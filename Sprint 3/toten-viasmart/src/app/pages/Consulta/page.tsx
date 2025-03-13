import Link from "next/link";

import Input from "../../components/Input/input";
import BotaoRota from "../../components/BotaoRota/botaorota";
import Botao from "../../components/Botao/botao";
import InputFilter from "../../components/InputSelect/inputselect";


const Consulta = () => {
    return(
        <>
         <div className="w-full h-screen bg-white ">
            <Link href={"/pages/Menu"}>
                <div className="w-full h-20 flex justify-end items-center pr-12">
                    <Botao titulo="Voltar" cor="#3B48EF"/>
                </div>
                <div className="w-full h-20 flex flex-col justify-center items-center pr-12">
                    <h1 className="font-semibold text-5xl">Consultar <span className="text-[#3B48EF]">rota</span></h1>
                    <div className= "w-[232] h-[10] bg-[#3B48EF] mr-28"></div>
                </div>
            </Link>

            <div className="w-full h-190 flex flex-col justify-center items-center p-30">
                <form action="#" className="w-full h-screen flex flex-col justify-center items-center">
                    <InputFilter placeholderText="Selecione a sua estação atual"/>
                    <br />
                    <InputFilter placeholderText="Selecione a sua estação destino"/>
                    <br />
                    <BotaoRota titulo="Mostrar rota"/>
                </form>
            </div>
         </div>
        </>
    );
}

export default Consulta