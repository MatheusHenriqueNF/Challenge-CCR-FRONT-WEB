import Botao from "@/app/components/Botao/botao"
import Link from "next/link"

const ChatBot = () => {
    return (
        <>
            
                <div className="w-full h-screen bg-white flex flex-col justify-center items-center">
                <Link href={"/pages/Menu"}>
                    <div className="w-full h-20 flex justify-end items-center pr-12">
                        <Botao titulo="Voltar" cor="#3B48EF"/>
                    </div>
                </Link>
                    <div className="w-150 h-180  border-2 border-[#3B48EF] flex flex-col justify-center items-center">
                        <div className="w-full h-15 flex flex-col justify-center items-center mb-40  bg-[#3B48EF] text-white text-2xl">
                            <p>ViaSmart</p>
                        </div>

                        <div className="w-full h-15 flex flex-col justify-center mb-5.5">
                            <div className="w-[400] h-15 bg-gray-200 rounded-4xl"></div>
                        </div>

                        <div className="w-full h-15 flex flex-col justify-center items-end mb-5.5 ">
                            <div className="w-[400] h-15 bg-gray-200 rounded-4xl"></div>
                        </div>

                        <div className="w-full h-35 flex flex-col justify-center mb-5.5 ]">
                            <div className="w-[400] h-35 bg-gray-200 rounded-4xl"></div>
                        </div>

                        <div className="w-full h-15 flex flex-col justify-center items-end mb-5.5">
                            <div className="w-[400] h-15 bg-gray-200 rounded-4xl"></div>
                        </div>

                        <div className="w-full h-30 flex flex-col justify-center items-center bg-[#3B48EF]">
                            <div className="w-[400] h-15 bg-gray-200 rounded-4xl"></div>
                        </div>

                    </div>

                </div>
            
        </>
    )
}

export default ChatBot