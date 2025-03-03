import Link from "next/link";

const Erro = () => {
    return(
        <>
            <Link href={"/Idioma"}>
                <div className="w-full h-screen bg-[#3B48EF] flex flex-col justify-center items-center">
                    <p className="text-6xl text-white font-semibold mb-30">Ops! O idioma escolhido não está disponível!</p>
                    <p className="text-6xl text-white font-semibold">Escolha outro</p>
                </div>
            </Link>
        </>
    );
}

export default Erro